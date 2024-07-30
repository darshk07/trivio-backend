import { createClient } from "@supabase/supabase-js";
import { PrismaClient } from "@prisma/client";
const supabase_key = process.env.ANON_KEY || "";
const SUPABASE_URL = process.env.SUPABASE_URL || "";

export const sc = createClient(SUPABASE_URL, supabase_key);
export const pc = new PrismaClient();
