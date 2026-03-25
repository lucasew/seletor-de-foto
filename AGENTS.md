# Project Conventions

## Directory Structure
- `src/` -> Contains business logic, state management, and shared utilities.
- `/` -> Root contains entrypoint `index.html` and configuration files.

## Error Handling
- All unexpected errors and catch blocks must funnel through the centralized error-reporting function (`reportError` in `src/error-reporter.js`).
- Direct calls to `console.error` are strictly forbidden.
- "Out of scope" is not an excuse to swallow errors — at minimum, report them.

## Tooling
- `mise` is non-negotiable for task execution and tool management.
- Linters and formatters must run exclusively through `workspaced` via `mise`.
- Tool versions in `mise.toml` must be strictly pinned.

## Pull Requests
- Must use descriptive titles matching the specific agent executing the task.
- Must include the following PR sections: `Assumptions`, `Alternatives Not Chosen`, `How To Pivot`, and `Next Knobs`.
