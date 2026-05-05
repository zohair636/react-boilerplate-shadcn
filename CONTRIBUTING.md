# Contributing

Thanks for your interest in contributing. This project is designed to be clean, scalable, and easy to extend, so contributions should follow the same principles.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch:
   `git checkout -b feature/your-change`
4. Install dependencies:
   `npm install`
5. Set up environment files:
   cp `.env.example` `.env.development`
6. Start the dev server:
   `npm run dev`

## Development Guidelines

- Use TypeScript and follow the existing project structure
- Keep business logic inside `features/`
- Do not spread logic across unrelated folders
- Use:
  - `components/ui/` for atomic UI (shadcn)
  - `components/shared/` for reusable app components
- Keep `pages/` as thin composition layers
- Prefer small, focused changes over large refactors
- Update documentation when needed

## Pull Requests

Before opening a PR:

- Ensure your code builds and runs correctly
- Keep changes focused and well-scoped
- Use clear commit messages (e.g. `feat: add auth hook`)
- Link related issues if applicable

In your PR:

- Explain what changed and why
- Include steps to test the changes

## Reporting Issues

When reporting a bug, include:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details if relevant

## License

By contributing, you agree that your contributions will be licensed under the MIT License.