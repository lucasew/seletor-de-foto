# Project Conventions

## Core Rules
- All task execution and tool management MUST use `mise`.
- Tool pinning using `mise.toml` is mandatory.
- The project is a static HTML/JavaScript application.

## Structure
- Entrypoint: `index.html` at the root.
- All errors must funnel through a centralized error-reporting function (`reportError` in `src/error-reporter.js`).
- Never use `console.error` directly. Always use the centralized error-reporting function.

## Important Locations
- `index.html` -> Main entrypoint, contains HTML skeleton, JS logic, and CSS. (Note: Extraction into separate files is tracked in an open PR).
