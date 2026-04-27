package handler

import (
	"ppdb-service/internal/model"
	"ppdb-service/internal/service"
	"github.com/gofiber/fiber/v2"
)

type StudentHandler struct {
	svc service.StudentService
}

func NewStudentHandler(svc service.StudentService) *StudentHandler {
	return &StudentHandler{svc}
}

func (h *StudentHandler) UpdateProfile(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(string)
	tenantID := c.Locals("tenant_id").(string)
	
	var student model.Student
	if err := c.BodyParser(&student); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	if err := h.svc.UpsertProfile(userID, tenantID, &student); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	return c.JSON(fiber.Map{"message": "Profile updated successfully"})
}

func (h *StudentHandler) GetProfile(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(string)
	tenantID := c.Locals("tenant_id").(string)
	
	student, err := h.svc.GetProfile(userID, tenantID)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Profile not found"})
	}

	return c.JSON(student)
}

func (h *StudentHandler) UpdateFamily(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(string)
	tenantID := c.Locals("tenant_id").(string)
	
	student, err := h.svc.GetProfile(userID, tenantID)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Student profile not found, complete profile first"})
	}

	var parents []model.Parent
	if err := c.BodyParser(&parents); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	if err := h.svc.UpsertFamily(student.ID.String(), parents); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	return c.JSON(fiber.Map{"message": "Family data updated successfully"})
}

func (h *StudentHandler) UpdateAcademic(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(string)
	tenantID := c.Locals("tenant_id").(string)
	
	student, err := h.svc.GetProfile(userID, tenantID)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Student profile not found"})
	}

	var record model.AcademicRecord
	if err := c.BodyParser(&record); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	if err := h.svc.UpsertAcademic(student.ID.String(), &record); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	return c.JSON(fiber.Map{"message": "Academic record updated successfully"})
}
