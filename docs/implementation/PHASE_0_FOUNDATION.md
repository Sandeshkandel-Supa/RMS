# Phase 0 — Implementation Foundation

Status: **in progress / foundation baseline only**  
Branch: `phase-0/restrox-implementation-foundation`

## 1. Goal

Establish a safe, evidence-led starting point for building the restaurant-management application from the RestroX inspection reference pack, while preserving the existing MIH DineOS marketing site. This phase is not a claim that a production backend or business rules have been verified.

## 2. Repository baseline

The current `main` branch is a small static Vercel landing page:
- `index.html` contains the marketing site and its inline CSS/JavaScript.
- `vercel.json` contains static-site security headers and clean URL configuration.
- There is no application source tree, API server, database schema/migration, automated test suite, or confirmed production domain API contract in this repository.

The RestroX inspection bundle is reference evidence, not application source code. It contains route/workflow inventories, focused observations, manifests, and evidence limits. The screenshot archive is a separate user-provided input. Neither archive should be treated as proof of backend semantics.

## 3. Safety and evidence rules

1. Preserve the current landing page during the first application build; do not replace `index.html` as a shortcut.
2. Mark requirements as **Observed UI**, **Read-only interaction**, **Synthetic mutation**, **Inconclusive**, or **Unknown / unverified**.
3. Implement only the visible interaction when evidence is UI-only. Do not invent persistence, authorization, accounting, stock, payment, or workflow-transition behavior.
4. Use synthetic data for demonstrations and tests. Do not replay mutations against a real tenant.
5. Treat the following as explicit unresolved discrepancies until independently verified:
   - Delivery order status and the order-summary status disagree in one capture.
   - POS checkout/draft visibility across Orders, KOT, and KDS is not established.
   - Stock Group row count and summary count disagree immediately after removal.
   - Stock History produced a React hydration error while remaining usable.
   - Purchase Bill list shows Paid while the edit draft shows an unpaid amount.
   - Trash/delete copy does not establish soft-delete or recovery semantics.
6. No credentials, cookies, tokens, authorization headers, or tenant-sensitive values may be committed to source control.

## 4. Provisional architecture direction

These are defaults for discussion and implementation planning, not claims about the original RestroX internals:

- **Web application:** TypeScript React application with a responsive component system, route-level loading/error/empty states, keyboard-accessible controls, and tests.
- **Application API:** typed request/response contracts, server-side validation, consistent error shapes, pagination, idempotency for mutation endpoints, and explicit authorization checks.
- **Persistence:** relational database with versioned migrations, foreign keys, audit fields, and documented transaction boundaries.
- **Tenant security:** every tenant-owned read and write must be scoped server-side; client-provided tenant IDs are never trusted as authorization.
- **Authentication and roles:** establish the identity provider/session model and a route/action permission matrix before implementing protected business flows.
- **Quality gates:** unit tests for pure business rules, API integration tests for authorization and persistence, and browser tests for the observed UI flows and responsive behavior.
- **Deployment:** retain the existing static landing page until a separately testable application route/deployment has been selected.

No framework, database, authentication provider, payment provider, or API contract is confirmed by the inspection evidence. Confirm these before making irreversible platform decisions.

## 5. Domain areas identified in the evidence pack

- Dashboard and analytics
- Orders, reservations, order details, KOT/KDS, delivery, checkout/POS
- Menu and catalog: dishes, categories, add-ons, menu sets, sub-menus, combos/offers
- Inventory: stock items, units, groups, consumption, transfers, production, stock history
- Finance: transactions, day book, journal vouchers, sales/purchases, returns, payments, cash/banks, taxes, chart of accounts, reports
- Customers, staff, roles, restaurant settings
- Services, delivery channels, SMS, loyalty, Connect, RestroLink, tables/spaces
- Notifications, support, release notes

The domain list is a coverage map only; it does not define a normalized schema or complete behavior.

## 6. Required gates before business logic

- Obtain the canonical source repository and confirm the target deployment/runtime.
- Define tenant isolation, roles, permissions, route ownership, and audit policy.
- Define and review API contracts for every write path.
- Obtain or design the database schema and migration strategy.
- Specify order/KOT/KDS/delivery/payment state machines and transaction boundaries.
- Specify prices, variants, discounts, taxes, rounding, tender allocation, invoice issuance, and refund/void rules.
- Specify inventory unit conversion, stock sufficiency, consumption timing, valuation, transfer posting, and production costing.
- Resolve known discrepancies with controlled synthetic-data tests.
- Add regression, accessibility, responsive, failure/retry, duplicate-submit, and permission tests.

## 7. Phase exit criteria

Phase 0 is complete only when:
- [x] Existing repository and reference-pack limits are recorded.
- [x] Existing marketing page is protected from accidental replacement.
- [x] Evidence classification and unresolved business-rule risks are documented.
- [ ] Product owner confirms the intended app stack/deployment target, or explicitly accepts the provisional defaults.
- [ ] The initial application shell and test harness are added on a separate implementation branch.
- [ ] CI/build checks pass for the new application shell.

## 8. Next implementation step

After the stack/deployment gate is resolved, create the isolated application shell, shared layout/navigation, design tokens, route guards placeholder, typed API boundary, and test harness. Do not implement payment, stock posting, financial calculations, or durable order state until their contracts are specified.
