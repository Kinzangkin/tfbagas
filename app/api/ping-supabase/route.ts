import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !anonKey) {
    throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, anonKey);

export async function GET() {
    try {
        const { error } = await supabase.auth.getSession();

        if (error) throw error;

        return NextResponse.json({ status: "alive" });
    } catch (err: unknown) {
        const message =
            err instanceof Error ? err.message : "Unknown error";

        return NextResponse.json(
            { status: "error", message },
            { status: 500 }
        );
    }
}
