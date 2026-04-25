package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/swagger"
	"github.com/joho/godotenv"
	"ppdb-service/internal/config"
	"ppdb-service/internal/handler"
	_ "ppdb-service/docs" // Sementara dinonaktifkan sampai swag init dijalankan
)

// @title PPDB API
// @version 1.0
// @description API for Student Admissions Management System
// @BasePath /api/v1
func main() {
	// Load environment variables
	if err := godotenv.Load(".env"); err != nil {
		log.Println("No .env file found, using system environment variables")
	}

	app := fiber.New(fiber.Config{
		AppName: "PPDB Management System",
	})

	// Middleware
	app.Use(cors.New())
	app.Use(logger.New())

	// Initialize Database & Migrations
	dbURL := "postgres://" + os.Getenv("DB_USER") + ":" + os.Getenv("DB_PASS") + "@" + os.Getenv("DB_HOST") + ":" + os.Getenv("DB_PORT") + "/" + os.Getenv("DB_NAME") + "?sslmode=" + os.Getenv("DB_SSLMODE")
	
	// Run Migrations
	config.RunMigrations(dbURL)
	
	// Initialize GORM
	db := config.InitDB()
	
	// Seed Initial Users
	config.SeedUsers(db)
	
	// Initialize Minio
	minioClient := config.InitMinio()

	// Swagger documentation (Aktifkan setelah menjalankan swag init)
	app.Get("/swagger/*", swagger.HandlerDefault)

	// Setup Routes
	handler.SetupRoutes(app, db, minioClient)

	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	if err := app.Listen(":" + port); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
