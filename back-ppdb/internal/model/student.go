package model

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Student struct {
	ID                uuid.UUID      `gorm:"type:uuid;primary_key;default:gen_random_uuid()" json:"id"`
	TenantID          uuid.UUID      `gorm:"type:uuid;not null" json:"tenant_id"`
	UserID            uuid.UUID      `gorm:"type:uuid" json:"user_id"`
	NISN              string         `gorm:"not null" json:"nisn"`
	NIK               string         `json:"nik"`
	FullName          string         `gorm:"not null" json:"full_name"`
	Gender            string         `json:"gender"`
	BirthPlace        string         `json:"birth_place"`
	BirthDate         time.Time      `json:"birth_date"`
	Religion          string         `json:"religion"`
	ChildNo           int            `json:"child_no"`
	SiblingsCount     int            `json:"siblings_count"`
	Citizenship       string         `json:"citizenship"`
	ChildStatus       string         `json:"child_status"`
	Height            int            `json:"height"`
	Weight            int            `json:"weight"`
	BloodType         string         `json:"blood_type"`
	Phone             string         `json:"phone"`
	Address           string         `json:"address"`
	Dusun             string         `json:"dusun"`
	RT                string         `json:"rt"`
	RW                string         `json:"rw"`
	Village           string         `json:"village"`
	District          string         `json:"district"`
	City              string         `json:"city"`
	Province          string         `json:"province"`
	PostalCode        string         `json:"postal_code"`
	DistanceToSchool  float64        `json:"distance_to_school"`
	TransportMode     string         `json:"transport_mode"`
	KIPStatus         bool           `json:"kip_status"`
	KIPNumber         string         `json:"kip_number"`
	PKHStatus         bool           `json:"pkh_status"`
	PKHNumber         string         `json:"pkh_number"`
	KKSStatus         bool           `json:"kks_status"`
	KKSNumber         string         `json:"kks_number"`
	CreatedAt         time.Time      `json:"created_at"`
	UpdatedAt         time.Time      `json:"updated_at"`
	DeletedAt         gorm.DeletedAt `gorm:"index" json:"-"`
}

type Parent struct {
	ID           uuid.UUID `gorm:"type:uuid;primary_key" json:"id"`
	StudentID    uuid.UUID `gorm:"type:uuid" json:"student_id"`
	RelationType string    `json:"relation_type"` // Father, Mother, Guardian
	FullName     string    `json:"full_name"`
	NIK          string    `json:"nik"`
	BirthYear    int       `json:"birth_year"`
	Education    string    `json:"education"`
	Occupation   string    `json:"occupation"`
	Income       string    `json:"income"`
	Phone        string    `json:"phone"`
}

type AcademicRecord struct {
	ID                 uuid.UUID `gorm:"type:uuid;primary_key" json:"id"`
	StudentID          uuid.UUID `gorm:"type:uuid" json:"student_id"`
	PreviousSchoolName string    `json:"previous_school_name"`
	NPSN               string    `json:"npsn"`
	SchoolAddress      string    `json:"school_address"`
	GraduationYear     int       `json:"graduation_year"`
	DiplomaNumber      string    `json:"diploma_number"`
	SKHUNNumber        string    `json:"skhun_number"`
	AverageScore       float64   `json:"average_score"`
}

type Major struct {
	ID       uuid.UUID `gorm:"type:uuid;primary_key" json:"id"`
	TenantID uuid.UUID `gorm:"type:uuid;not null" json:"tenant_id"`
	Code     string    `json:"code"`
	Name     string    `json:"name"`
}

type Registration struct {
	ID             uuid.UUID `gorm:"type:uuid;primary_key" json:"id"`
	TenantID       uuid.UUID `gorm:"type:uuid;not null" json:"tenant_id"`
	StudentID      uuid.UUID `gorm:"type:uuid" json:"student_id"`
	Major1ID       uuid.UUID `gorm:"type:uuid" json:"major_1_id"`
	Major2ID       uuid.UUID `gorm:"type:uuid" json:"major_2_id"`
	RegistrationNo string    `json:"registration_no"`
	Status         string    `json:"status"`
	SelectionPath  string    `json:"selection_path"`
}

type Document struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key" json:"id"`
	StudentID uuid.UUID `gorm:"type:uuid" json:"student_id"`
	DocType   string    `json:"doc_type"`
	FileName  string    `json:"file_name"`
	FileURL   string    `json:"file_url"`
	Status    string    `json:"status"`
}
