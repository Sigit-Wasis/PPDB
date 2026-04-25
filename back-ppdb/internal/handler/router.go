package handler

import (
	"ppdb-service/internal/repository"
	"ppdb-service/internal/service"
	"github.com/gofiber/fiber/v2"
	"github.com/minio/minio-go/v7"
	"gorm.io/gorm"
)

func SetupRoutes(app *fiber.App, db *gorm.DB, minio *minio.Client) {
	// Initialize Repository, Service, and Handler
	userRepo := repository.NewUserRepository(db)
	authSvc := service.NewAuthService(userRepo)
	authHandler := NewAuthHandler(authSvc)

	api := app.Group("/api/v1")

	// Health Check
	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok", "message": "PPDB Service is running"})
	})

	// Auth Routes
	auth := api.Group("/auth")
	auth.Post("/register", authHandler.Register)
	auth.Post("/login", authHandler.Login)

	// TODO: Student Routes
	// student := api.Group("/student")
	// student.Post("/register", ...)
	// student.Get("/profile", ...)

	// TODO: Admin Routes
	// admin := api.Group("/admin")
	// admin.Get("/registrations", ...)
}
