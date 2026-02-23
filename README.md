# Job Application Platform - Frontend

This project was developed as part of a technical challenge for a **Junior Fullstack Developer** position.

The goal was not only to build a functional solution, but to design it with production-oriented architecture, scalability in mind, and clean separation of concerns.

🔗 **Live Demo:** https://job-application-potichkin.vercel.app/

---

## Project Objective

Build a client-side application that allows candidates to:
- Register and retrieve their identifiers
- View available job positions
- Apply to a job by submitting a GitHub repository URL

Beyond fulfilling the functional requirements, the focus of this implementation was:
- Clean architecture
- Domain modeling
- Explicit API contracts
- Predictable data flow
- Maintainable code structure

---

## Tech Stack
- React 19
- TypeScript (strict mode)
- Vite
- TanStack Query (React Query v5)
- Tailwind CSS
- ESLint
- Husky (pre-commit hooks)

---

## Git Strategy

This project was developed using a feature-branch workflow.

Each significant change (API integration, domain modeling, UI iteration, etc.) was implemented in isolated branches before being merged into `dev`.

- `main` → Production-ready code (deployed version)
- `dev` → Integration branch for ongoing development
- `feature/*` → Isolated feature development
- `fix/*` → Bug fixes and small corrections

Branches were intentionally preserved to:
- Make the development process transparent
- Show incremental architectural decisions
- Demonstrate iterative problem-solving

The goal was to simulate a real collaborative workflow rather than a single-commit challenge delivery.

---

## Architectural Approach
The application follows a layered structure:

```
src/
├── api/             → HTTP layer, DTO contracts & mappers
├── types/           → Domain models
├── utils/           → Generic utilities (validators)
├── hooks/           → Data orchestration (React Query)
├── components/      → UI layer
```

### Why this structure?

As a Fullstack-oriented developer, I believe frontend should not directly depend on backend contracts.
For that reason:
- DTOs (API responses) are separated from Domain models.
- Mappers transform external data into internal entities.
- Components never consume raw API responses.

This creates a boundary between backend contracts and frontend logic, making the application easier to evolve.

---

## Data Flow
To ensure the UI is decoupled from the Backend, I implemented a mapping pattern:
```
Component (UI) ↔ Custom Hook (Orchestration) ↔ API Layer (Transport)
                                                     ↓
                                            DTO → Mapper → Domain Model
```

---

## Why TanStack Query?
I chose **TanStack Query** because:
1. It separates server state from UI state.
2. It simplifies caching, retries, and background refetching.
3. It prevents manual loading/error state duplication.
4. It improves scalability as the project grows.

Instead of managing async logic manually with `useEffect` and `useState`, TanStack Query provides:
- Declarative data fetching
- Built-in cache management
- Automatic deduplication of requests
- Predictable mutation handling

---

## Component Organization
Components are grouped by abstraction level:

```
components/
├── ui/             → Reusable atomic components
├── layout/         → Structural components
├── jobs/           → Feature-specific components
```

This prevents a flat, unscalable structure and prepares the project for future features.

---

## Error Handling Strategy
- Centralized `apiFetch` wrapper
- Custom error abstraction
- UI-level notification system

---

## UI/UX & Brand Alignment
The visual identity was designed to align with the company's branding guidelines.
- Brand Consistency: Colors, typography, and visual language were inspired by the company’s official landing page.
- Immersive Experience: Custom-built Splash Screen with logo animations to handle initial resource loading gracefully.
- Perceived Performance: Implementation of Skeleton Screens to reduce bounce rates and improve user experience during data fetching.
  
---

## Improvements for Production

If this were a real production project, I would additionally implement:
- Unit and integration tests (Vitest + React Testing Library)
- CI pipeline (GitHub Actions)
- Environment-based configuration
- Error boundaries
- Feature-based architecture if the app grows

---

## Fullstack Mindset Applied

Although this is a frontend project, decisions were made considering backend interaction:
- Idempotency awareness in mutations
- Strict contract validation
- Avoiding DTO leakage into UI
- Clear separation between transport and domain layers

---

## Running Locally
Clone the repository
```
git clone https://github.com/MarPotichkin/job-application.git
```

Install dependencies:
```
npm install
```

Create .env file and add your API URL
```
VITE_API_BASE_URL=https://your-api.com
```

Start development server
```
npm run dev
```
