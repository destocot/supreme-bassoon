"use server";

import { reqRoles } from "@/features/auth/queries";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function createDepartmentAction(formData: FormData) {
  const profile = await reqRoles(["ADMIN"]);
  if (!profile) throw new Error("Forbidden");

  const name = formData.get("name") as string;

  if (!name || name.length < 3) {
    throw new Error("Name must be at least 3 characters long");
  }

  const supabase = await createClient();

  const { error } = await supabase.from("departments").insert({ name });

  if (error) {
    console.error("[CreateDepartmentError]", error.message);
  }

  revalidatePath("/");
}
