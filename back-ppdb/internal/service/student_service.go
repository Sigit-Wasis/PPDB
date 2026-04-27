package service

import (
	"errors"
	"ppdb-service/internal/model"
	"ppdb-service/internal/repository"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type StudentService interface {
	UpsertProfile(userID string, tenantID string, studentData *model.Student) error
	GetProfile(userID string, tenantID string) (*model.Student, error)
	UpsertFamily(studentID string, parents []model.Parent) error
	GetFamily(studentID string) ([]model.Parent, error)
	UpsertAcademic(studentID string, record *model.AcademicRecord) error
	GetAcademic(studentID string) (*model.AcademicRecord, error)
}

type studentService struct {
	repo repository.StudentRepository
}

func NewStudentService(repo repository.StudentRepository) StudentService {
	return &studentService{repo}
}

func (s *studentService) UpsertProfile(userID string, tenantID string, studentData *model.Student) error {
	userUUID, err := uuid.Parse(userID)
	if err != nil {
		return err
	}
	tenantUUID, err := uuid.Parse(tenantID)
	if err != nil {
		return err
	}

	existing, err := s.repo.GetStudentByUserID(userID, tenantID)
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		return err
	}

	studentData.TenantID = tenantUUID
	studentData.UserID = userUUID

	if existing != nil {
		studentData.ID = existing.ID
		return s.repo.UpdateStudent(studentData)
	}

	return s.repo.CreateStudent(studentData)
}

func (s *studentService) GetProfile(userID string, tenantID string) (*model.Student, error) {
	return s.repo.GetStudentByUserID(userID, tenantID)
}

func (s *studentService) UpsertFamily(studentID string, parents []model.Parent) error {
	studentUUID, err := uuid.Parse(studentID)
	if err != nil {
		return err
	}

	existingParents, err := s.repo.GetParentsByStudentID(studentID)
	if err != nil {
		return err
	}

	for _, p := range parents {
		p.StudentID = studentUUID
		var found *model.Parent
		for _, ep := range existingParents {
			if ep.RelationType == p.RelationType {
				found = &ep
				break
			}
		}

		if found != nil {
			p.ID = found.ID
			if err := s.repo.UpdateParent(&p); err != nil {
				return err
			}
		} else {
			if err := s.repo.CreateParent(&p); err != nil {
				return err
			}
		}
	}

	return nil
}

func (s *studentService) GetFamily(studentID string) ([]model.Parent, error) {
	return s.repo.GetParentsByStudentID(studentID)
}

func (s *studentService) UpsertAcademic(studentID string, record *model.AcademicRecord) error {
	studentUUID, err := uuid.Parse(studentID)
	if err != nil {
		return err
	}

	existing, err := s.repo.GetAcademicRecordByStudentID(studentID)
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		return err
	}

	record.StudentID = studentUUID
	if existing != nil {
		record.ID = existing.ID
		return s.repo.UpdateAcademicRecord(record)
	}

	return s.repo.CreateAcademicRecord(record)
}

func (s *studentService) GetAcademic(studentID string) (*model.AcademicRecord, error) {
	return s.repo.GetAcademicRecordByStudentID(studentID)
}
