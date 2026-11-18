# HSE ORGANIX - Architecture Overview

## 1. Architectural Style

HSE ORGANIX is designed as a Multi-Tenant Modular Monolith.

The application is deployed as a cohesive system while maintaining
strict module boundaries, independent domain ownership and explicit
internal contracts.

Microservices are not part of the initial implementation.

## 2. Conceptual Architecture Layers

1. User Interface Layer
2. Access and Security Layer
3. Central Core Layer
4. HSE Domain Modules Layer
5. Shared Services Layer
6. Infrastructure and Storage Layer

## 3. Backend Architecture

- Laravel REST API
- Domain-oriented modular organization
- Explicit module ownership
- Centralized authentication and authorization
- Centralized workflow and shared services
- UUIDv7 identifiers for internal entities

## 4. Frontend Architecture

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand for UI state
- TanStack Query for server state

## 5. Database Architecture

PostgreSQL is the centralized relational database.

The initial schema boundaries are:

- platform
- identity
- access
- workflow
- shared
- settings
- messaging
- reporting
- hse_planning
- hse_assurance
- hse_operations
- hse_people_environment

Each module must respect data ownership boundaries.

## 6. Multi-Tenancy

- Organization-owned records must be tenant-scoped.
- Organization identifiers must be enforced in relevant relationships.
- Cross-tenant data access is prohibited by default.
- Tenant isolation must be enforced at application and database levels.
- Platform administration does not imply default access to tenant content.

## 7. Identity and Identifiers

UUIDv7 is the standard internal identifier for primary keys
and internal entity references.

Identifiers are immutable and independent of display numbers.

## 8. Security Principles

- Deny by default
- Least privilege
- Role-Based Access Control
- DataScope enforcement
- Secure session management
- Multi-Factor Authentication
- Auditability
- Tenant isolation
- Encryption in transit and at rest

## 9. Infrastructure

Initial infrastructure components:

- Docker Compose
- Nginx
- PostgreSQL
- Redis
- MinIO

Development, Staging and Production environments
must remain logically separated.

## 10. Engineering Principles

- No uncontrolled cross-module database access.
- No duplicate ownership of domain data.
- No business logic in presentation components.
- No secrets committed to Git.
- All architectural changes must be documented through ADRs.
- Automated tests and CI checks are mandatory.

## 11. Current Implementation Status

Milestone 0 - Project Foundation

Status: In Progress
