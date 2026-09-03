import serverless from 'serverless-http';
import { createApp } from '../../src/app';
import { InMemoryTodoRepository } from '../../src/repository/in-memory-todo-repository';

// The hosted preview specifically uses in-memory storage, not
// JsonFileTodoRepository -- Netlify Functions don't reliably persist local
// file writes across invocations (different invocations can land on
// different, ephemeral containers). The assignment explicitly allows an
// in-memory store as an acceptable fallback; the actual submission's
// server.ts entrypoint is unaffected and stays file-based. Data here resets
// on cold start -- documented in the README, not a bug.
const app = createApp(new InMemoryTodoRepository());

export const handler = serverless(app);
