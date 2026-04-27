package handler

import (
	"ppdb-service/internal/model"
	"ppdb-service/internal/service"
	"github.com/gofiber/fiber/v2"
)

type AuthHandler struct {
	svc service.AuthService
}

func NewAuthHandler(svc service.AuthService) *AuthHandler {
	return &AuthHandler{svc}
}

func (h *AuthHandler) Register(c *fiber.Ctx) error {
	tenantID := c.Locals("tenant_id").(string)
	var req struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	user, err := h.svc.Register(req.Email, req.Password, tenantID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	return c.Status(201).JSON(fiber.Map{
		"message": "User registered successfully",
		"user":    user,
	})
}

func (h *AuthHandler) Login(c *fiber.Ctx) error {
	tenantID := c.Locals("tenant_id").(string)
	var req model.LoginRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	token, user, err := h.svc.Login(req.Email, req.Password, tenantID)
	if err != nil {
		return c.Status(401).JSON(fiber.Map{"error": err.Error()})
	}

	return c.JSON(model.LoginResponse{
		Token: token,
		User:  *user,
	})
}
