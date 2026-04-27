package repository

import (
	"ppdb-service/internal/model"
	"gorm.io/gorm"
)

type UserRepository interface {
	Create(user *model.User) error
	FindByEmail(email string, tenantID string) (*model.User, error)
	FindByID(id string, tenantID string) (*model.User, error)
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{db}
}

func (r *userRepository) Create(user *model.User) error {
	return r.db.Create(user).Error
}

func (r *userRepository) FindByEmail(email string, tenantID string) (*model.User, error) {
	var user model.User
	err := r.db.Where("email = ? AND tenant_id = ?", email, tenantID).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *userRepository) FindByID(id string, tenantID string) (*model.User, error) {
	var user model.User
	err := r.db.Where("id = ? AND tenant_id = ?", id, tenantID).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}
