# ADR-0002: UUIDv7 as the Standard Entity Identifier

- Status: Accepted
- Date: 2026-11-18
- Decision Owners: HSE ORGANIX Architecture

## Context

HSE ORGANIX requires globally unique, immutable and
tenant-independent internal identifiers for all entities.

Identifiers must support distributed generation, efficient
database indexing and reliable internal relationships.

## Decision

UUIDv7 is the mandatory internal identifier standard
for primary keys of all applicable entities.

## Rules

1. UUIDv7 is used for internal primary keys.
2. Internal relationships must reference UUID identifiers.
3. Identifiers are immutable after creation.
4. Internal identifiers are independent of display numbers.
5. Soft deletion and archival must not change identifiers.
6. Organization ownership is enforced separately through
   organization_id and tenant integrity constraints.
7. UUIDv7 must be generated using a reliable implementation.

## Consequences

- Improved index locality compared with random UUIDv4.
- Globally unique identifiers without centralized allocation.
- Consistent identity across modules.
- Display numbering remains an independent business concern.

## Scope

This decision applies to all HSE ORGANIX modules,
shared services and future implementation milestones.
