import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, price, tags, is_digital } = body;

    // Validate minimum required fields
    if (!title || !price) {
      return NextResponse.json({ error: "Title and price are required" }, { status: 400 });
    }

    const id = `lst_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const shopId = "shp_demo123"; // Hardcoded for MVP MVP

    // Insert into local.db
    await db.execute({
      sql: `INSERT INTO listings (id, shop_id, title, description, price, tags, is_digital, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [id, shopId, title, description, price, JSON.stringify(tags), is_digital ? 1 : 0, 'active']
    });

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error) {
    console.error("Failed to save listing:", error);
    return NextResponse.json({ error: "Failed to save listing" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await db.execute("SELECT * FROM listings ORDER BY created_at DESC");
    return NextResponse.json({ listings: result.rows }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch listings:", error);
    return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 });
  }
}
