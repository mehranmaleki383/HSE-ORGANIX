# HSE ORGANIX

Enterprise HSE Management Platform

## Product Principles

- Simple UX, Solid Engineering
- Multi-tenant SaaS architecture
- Enter once, reuse for reports
- Secure-by-design and least privilege
- Modular Monolith architecture
- No Excel-based outputs

## Technology Stack

| Layer | Technology |
|---|---|
| Backend | Laravel / PHP |
| Frontend | React / TypeScript |
| UI | Tailwind CSS / shadcn/ui |
| Database | PostgreSQL |
| Cache & Queue | Redis |
| Object Storage | MinIO |
| Containers | Docker / Docker Compose |
| Web Server | Nginx |
| API | REST / OpenAPI |
| Version Control | Git / GitHub |
| CI | GitHub Actions |

## Repository Structure

- `backend/` - Laravel application
- `frontend/` - React application
- `infra/` - Infrastructure configuration
- `docs/architecture/` - Architecture documentation
- `docs/adr/` - Architecture Decision Records
- `.github/workflows/` - CI workflows

## Architecture

HSE ORGANIX uses a Modular Monolith architecture with a centralized
PostgreSQL database and clearly defined module boundaries.

All organization-owned records must be tenant-scoped.
Internal entity identifiers use UUIDv7.

## Development Milestones

- Milestone 0: Project Foundation
- Milestone 1: Identity and Tenant Management
- Milestone 2: RBAC and DataScope
- Milestone 3: Workflow Engine
- Milestone 4: Shared Services

## Development Status

Milestone 0 - In Progress

## Documentation

Architecture decisions and technical documentation are maintained
inside the `docs/` directory.
