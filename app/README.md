# MIH DineOS application shell

This is a new, isolated React + TypeScript + Vite workspace. It does not replace the existing root marketing page.

## Start locally

```bash
cd app
npm install
npm run dev
```

## Checks

```bash
npm run build
npm test
```

The current screen is an application-shell prototype with placeholder navigation and module cards. It uses no live data, authentication, API, or database. The dashes shown for orders and sales are intentionally not fabricated figures.

Before connecting business flows, define the identity/tenant model, role permissions, API contracts, persistence schema, and domain state machines. See [Phase 0 foundation](../docs/implementation/PHASE_0_FOUNDATION.md).
