package repository

import (
	"ppdb-service/internal/model"
	"gorm.io/gorm"
)

type MajorRepository interface {
	GetAll(tenantID string) ([]model.Major, error)
	GetByID(id string, tenantID string) (*model.Major, error)
}

type majorRepository struct {
	db *gorm.DB
}

func NewMajorRepository(db *gorm.DB) MajorRepository {
	return &majorRepository{db}
}

func (r *majorRepository) GetAll(tenantID string) ([]model.Major, error) {
	var majors []model.Major
	err := r.db.Where("tenant_id = ?", tenantID).Find(&majors).Error
	return majors, err
}

func (r *majorRepository) GetByID(id string, tenantID string) (*model.Major, error) {
	var major model.Major
	err := r.db.Where("id = ? AND tenant_id = ?", id, tenantID).First(&major).Error
	if err != nil {
		return nil, err
	}
	return &major, nil
}
