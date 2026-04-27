package repository

import (
	"ppdb-service/internal/model"
	"gorm.io/gorm"
)

type StudentRepository interface {
	CreateStudent(student *model.Student) error
	UpdateStudent(student *model.Student) error
	GetStudentByUserID(userID string, tenantID string) (*model.Student, error)
	GetStudentByID(id string, tenantID string) (*model.Student, error)
	
	CreateParent(parent *model.Parent) error
	UpdateParent(parent *model.Parent) error
	GetParentsByStudentID(studentID string) ([]model.Parent, error) // StudentID is already tenant-isolated
	
	CreateAcademicRecord(record *model.AcademicRecord) error
	UpdateAcademicRecord(record *model.AcademicRecord) error
	GetAcademicRecordByStudentID(studentID string) (*model.AcademicRecord, error)
}

type studentRepository struct {
	db *gorm.DB
}

func NewStudentRepository(db *gorm.DB) StudentRepository {
	return &studentRepository{db}
}

func (r *studentRepository) CreateStudent(student *model.Student) error {
	return r.db.Create(student).Error
}

func (r *studentRepository) UpdateStudent(student *model.Student) error {
	return r.db.Where("tenant_id = ?", student.TenantID).Save(student).Error
}

func (r *studentRepository) GetStudentByUserID(userID string, tenantID string) (*model.Student, error) {
	var student model.Student
	err := r.db.Where("user_id = ? AND tenant_id = ?", userID, tenantID).First(&student).Error
	if err != nil {
		return nil, err
	}
	return &student, nil
}

func (r *studentRepository) GetStudentByID(id string, tenantID string) (*model.Student, error) {
	var student model.Student
	err := r.db.Where("id = ? AND tenant_id = ?", id, tenantID).First(&student).Error
	if err != nil {
		return nil, err
	}
	return &student, nil
}

func (r *studentRepository) CreateParent(parent *model.Parent) error {
	return r.db.Create(parent).Error
}

func (r *studentRepository) UpdateParent(parent *model.Parent) error {
	return r.db.Save(parent).Error
}

func (r *studentRepository) GetParentsByStudentID(studentID string) ([]model.Parent, error) {
	var parents []model.Parent
	err := r.db.Where("student_id = ?", studentID).Find(&parents).Error
	return parents, err
}

func (r *studentRepository) CreateAcademicRecord(record *model.AcademicRecord) error {
	return r.db.Create(record).Error
}

func (r *studentRepository) UpdateAcademicRecord(record *model.AcademicRecord) error {
	return r.db.Save(record).Error
}

func (r *studentRepository) GetAcademicRecordByStudentID(studentID string) (*model.AcademicRecord, error) {
	var record model.AcademicRecord
	err := r.db.Where("student_id = ?", studentID).First(&record).Error
	if err != nil {
		return nil, err
	}
	return &record, nil
}
