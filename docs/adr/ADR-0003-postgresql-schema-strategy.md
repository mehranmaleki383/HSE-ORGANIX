# ADR-0003: Centralized PostgreSQL and Schema Boundaries

- Status: Accepted
- Date: 2026-11-18
- Decision Owners: HSE ORGANIX Architecture

## Context

HSE ORGANIX contains multiple interconnected business domains
that require transactional consistency, controlled data ownership
and reliable tenant isolation.

## Decision

A single centralized PostgreSQL database will be used
for each deployment environment.

The database will be logically divided into the following schemas:

1. platform
2. identity
3. access
4. workflow
5. shared
6. settings
7. messaging
8. reporting
9. hse_planning
10. hse_assurance
11. hse_operations
12. hse_people_environment

## Architectural Rules

1. Each schema represents a defined ownership boundary.
2. Modules must not perform uncontrolled access to tables
   owned by other modules.
3. Cross-module interactions must follow explicit contracts.
4. Organization-owned records must include organization_id.
5. Tenant-scoped relationships must enforce organization
   consistency at database level.
6. Foreign keys across schemas are permitted when
   referential integrity requires them.
7. Separate databases per HSE module are not part
   of the initial architecture.

## Consequences

- Strong transactional consistency.
- Centralized database governance.
- Clear logical ownership boundaries.
- Simplified initial deployment and operations.
- Module boundaries require application-level enforcement
  and automated testing.

## Scope

This decision applies to all initial HSE ORGANIX modules
and shared services.
