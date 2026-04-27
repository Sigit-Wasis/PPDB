package service

import (
	"ppdb-service/internal/model"
	"ppdb-service/internal/repository"
)

type MajorService interface {
	GetAvailableMajors(tenantID string) ([]model.Major, error)
}

type majorService struct {
	repo repository.MajorRepository
}

func NewMajorService(repo repository.MajorRepository) MajorService {
	return &majorService{repo}
}

func (s *majorService) GetAvailableMajors(tenantID string) ([]model.Major, error) {
	return s.repo.GetAll(tenantID)
}
