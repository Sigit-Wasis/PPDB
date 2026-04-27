package repository

import (
	"ppdb-service/internal/model"
	"gorm.io/gorm"
)

type RegistrationRepository interface {
	Create(reg *model.Registration) error
	Update(reg *model.Registration) error
	GetByStudentID(studentID string) (*model.Registration, error)
	GetByID(id string) (*model.Registration, error)
	GetAll(filters map[string]interface{}) ([]model.Registration, error)
}

type registrationRepository struct {
	db *gorm.DB
}

func NewRegistrationRepository(db *gorm.DB) RegistrationRepository {
	return &registrationRepository{db}
}

func (r *registrationRepository) Create(reg *model.Registration) error {
	return r.db.Create(reg).Error
}

func (r *registrationRepository) Update(reg *model.Registration) error {
	return r.db.Save(reg).Error
}

func (r *registrationRepository) GetByStudentID(studentID string) (*model.Registration, error) {
	var reg model.Registration
	err := r.db.Where("student_id = ?", studentID).First(&reg).Error
	if err != nil {
		return nil, err
	}
	return &reg, nil
}

func (r *registrationRepository) GetByID(id string) (*model.Registration, error) {
	var reg model.Registration
	err := r.db.Where("id = ?", id).First(&reg).Error
	if err != nil {
		return nil, err
	}
	return &reg, nil
}

func (r *registrationRepository) GetAll(filters map[string]interface{}) ([]model.Registration, error) {
	var registrations []model.Registration
	query := r.db
	for key, value := range filters {
		if value != "" {
			query = query.Where(key+" = ?", value)
		}
	}
	err := query.Find(&registrations).Error
	return registrations, err
}
