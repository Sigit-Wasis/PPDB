package middleware

import (
	"ppdb-service/internal/model"
	"strings"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func TenantMiddleware(db *gorm.DB) fiber.Handler {
	return func(c *fiber.Ctx) error {
		// 1. Identification via Subdomain (e.g. smkn1.ppdb.com)
		host := c.Hostname()
		subdomain := strings.Split(host, ".")[0]

		// 2. Identification via Header (e.g. X-Tenant-Subdomain) - useful for testing/API
		headerSubdomain := c.Get("X-Tenant-Subdomain")
		if headerSubdomain != "" {
			subdomain = headerSubdomain
		}

		// 3. Fallback to default if subdomain is 'localhost' or 'www'
		if subdomain == "localhost" || subdomain == "www" || subdomain == "" {
			// In production, you might want to show a landing page or error
			// For development, we can default to 'smk-default'
			subdomain = "smk-default"
		}

		var tenant model.Tenant
		err := db.Where("subdomain = ?", subdomain).First(&tenant).Error
		if err != nil {
			return c.Status(404).JSON(fiber.Map{
				"error": "Tenant not found or inactive",
			})
		}

		// Store tenant info in context
		c.Locals("tenant_id", tenant.ID.String())
		c.Locals("tenant_name", tenant.Name)
		c.Locals("education_level", tenant.EducationLevel)
		c.Locals("tenant_config", tenant.Config)

		return c.Next()
	}
}
