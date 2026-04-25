package config

import (
	"log"
	"ppdb-service/internal/model"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func SeedUsers(db *gorm.DB) {
	var count int64
	db.Model(&model.User{}).Count(&count)

	if count > 0 {
		log.Println("Database already seeded, skipping user seeding")
		return
	}

	password, _ := bcrypt.GenerateFromPassword([]byte("password123"), bcrypt.DefaultCost)

	users := []model.User{
		{
			Email:    "admin@ppdb.com",
			Password: string(password),
			Role:     "admin",
		},
		{
			Email:    "student@ppdb.com",
			Password: string(password),
			Role:     "student",
		},
	}

	for _, user := range users {
		if err := db.Create(&user).Error; err != nil {
			log.Printf("Failed to seed user %s: %v", user.Email, err)
		} else {
			log.Printf("Seeded user: %s", user.Email)
		}
	}

	log.Println("Database seeding completed successfully")
}
