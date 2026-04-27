package handler

import (
	"ppdb-service/internal/service"
	"github.com/gofiber/fiber/v2"
)

type MajorHandler struct {
	svc service.MajorService
}

func NewMajorHandler(svc service.MajorService) *MajorHandler {
	return &MajorHandler{svc}
}

func (h *MajorHandler) ListMajors(c *fiber.Ctx) error {
	tenantID := c.Locals("tenant_id").(string)
	majors, err := h.svc.GetAvailableMajors(tenantID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	return c.JSON(majors)
}
