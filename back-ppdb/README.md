## Migrate Up
migrate -path database/migrations -database "postgres://postgres:password_anda@localhost:5432/ppdb_db?sslmode=disable" up

## Migrate Down
migrate -path database/migrations -database "postgres://postgres:password_anda@localhost:5432/ppdb_db?sslmode=disable" down

## Test Credentials
After running the application, the following default accounts will be seeded automatically:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@ppdb.com` | `password123` |
| **Student** | `student@ppdb.com` | `password123` |

## API Documentation
Once the server is running, you can access the Swagger UI at:
[http://localhost:8100/swagger/index.html](http://localhost:8100/swagger/index.html)
