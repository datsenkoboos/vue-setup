# Vue Setup

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Required environment variables

See [.env.example](./.env.example).

## Development Server

Start development server on `http://localhost:3000`:

```bash
pnpm dev
```

Start Storybook server on `http://localhost:6006`:

```bash
pnpm dev:sb
```

## Production

Build application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Testing

We use [Vitest](https://vitest.dev/) for module and component testing.

```bash
# Run unit tests
$ pnpm test:unit

# Run typecheck
$ pnpm typecheck

# Run lint
$ pnpm lint
```

