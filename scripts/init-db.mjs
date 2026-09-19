import { createClient } from "@libsql/client";
import fs from "fs";

const dbPath = "file:local.db";
const db = createClient({ url: dbPath });

async function init() {
  console.log("Initializing local SQLite database...");

  // Users Table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      role TEXT NOT NULL DEFAULT 'buyer', -- buyer, seller, admin
      verified_status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Shops Table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS shops (
      id TEXT PRIMARY KEY,
      user_id TEXT UNIQUE NOT NULL,
      name TEXT UNIQUE NOT NULL,
      bio TEXT,
      banner_url TEXT,
      custom_order_enabled BOOLEAN DEFAULT FALSE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // Listings Table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS listings (
      id TEXT PRIMARY KEY,
      shop_id TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      price INTEGER NOT NULL, -- Stored in cents/paisa
      tags TEXT, -- JSON string
      is_digital BOOLEAN DEFAULT FALSE,
      status TEXT DEFAULT 'active',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (shop_id) REFERENCES shops(id)
    );
  `);

  // Orders Table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      buyer_id TEXT NOT NULL,
      shop_id TEXT NOT NULL,
      listing_id TEXT NOT NULL,
      amount INTEGER NOT NULL,
      status TEXT DEFAULT 'pending', -- pending, paid, shipped, delivered
      stripe_session_id TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (buyer_id) REFERENCES users(id),
      FOREIGN KEY (shop_id) REFERENCES shops(id),
      FOREIGN KEY (listing_id) REFERENCES listings(id)
    );
  `);

  console.log("Database schema initialized successfully.");
}

init().catch(console.error);
