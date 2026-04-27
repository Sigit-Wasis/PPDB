package handler

import (
	"ppdb-service/internal/repository"
	"ppdb-service/internal/service"
	"ppdb-service/internal/middleware"
	"github.com/gofiber/fiber/v2"
	"github.com/minio/minio-go/v7"
	"gorm.io/gorm"
)

func SetupRoutes(app *fiber.App, db *gorm.DB, minio *minio.Client) {
	// Initialize Repositories
	userRepo := repository.NewUserRepository(db)
	studentRepo := repository.NewStudentRepository(db)
	majorRepo := repository.NewMajorRepository(db)
	// registrationRepo := repository.NewRegistrationRepository(db)

	// Initialize Services
	authSvc := service.NewAuthService(userRepo)
	studentSvc := service.NewStudentService(studentRepo)
	majorSvc := service.NewMajorService(majorRepo)

	// Initialize Handlers
	authHandler := NewAuthHandler(authSvc)
	studentHandler := NewStudentHandler(studentSvc)
	majorHandler := NewMajorHandler(majorSvc)

	api := app.Group("/api/v1", middleware.TenantMiddleware(db))

	// Health Check
	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status": "ok", 
			"message": "PPDB Service is running",
			"tenant": c.Locals("tenant_name"),
			"level": c.Locals("education_level"),
		})
	})

	// Auth Routes
	auth := api.Group("/auth")
	auth.Post("/register", authHandler.Register)
	auth.Post("/login", authHandler.Login)

	// Major Routes (Public for students to see choices)
	api.Get("/majors", majorHandler.ListMajors)

	// Student Routes (Protected)
	student := api.Group("/student", middleware.JWTMiddleware())
	student.Post("/profile", studentHandler.UpdateProfile)
	student.Get("/profile", studentHandler.GetProfile)
	student.Post("/family", studentHandler.UpdateFamily)
	student.Post("/academic", studentHandler.UpdateAcademic)

	// TODO: Admin Routes
	// admin := api.Group("/admin", middleware.JWTMiddleware())
	// admin.Get("/registrations", ...)
}
