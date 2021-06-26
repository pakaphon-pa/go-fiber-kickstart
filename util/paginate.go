package util

import (
	"math"

	"github.com/dackmagic115/go-fiber-kickstart/interfaces"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func Paginate(db *gorm.DB, entity interfaces.Entity, page int) fiber.Map {
	limit := 5
	offset := (page - 1) * limit

	data := entity.Take(db, limit, offset)
	total := entity.Count(db)

	return fiber.Map{
		"data": data,
		"meta": fiber.Map{
			"total":     total,
			"page":      page,
			"last_page": math.Ceil(float64(int(total) / limit)),
		},
	}
}
