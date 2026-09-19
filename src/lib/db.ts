import { createClient } from "@libsql/client";

// This points to the local SQLite database we created with init-db.mjs
export const db = createClient({
  url: "file:local.db",
});
