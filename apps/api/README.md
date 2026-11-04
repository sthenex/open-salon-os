# API application

Planned portable HTTP application using Hono-compatible web primitives. It composes domain services, authentication, scope enforcement, repositories, adapters, background jobs, and observability.

No route may accept tenant or branch identity as trusted authority from the client. Commands must be idempotent where retry is possible.

