"use server";

import { reqRoles } from "@/features/auth/queries";
import { createClient } from "@/utils/supabase/server";

export async function updateServiceTypeDepartmentAction(
  serviceTypeId: number,
  departmentId: number,
) {
  await reqRoles(["ADMIN"]);

  const supabase = await createClient();

  const { error } = await supabase.from("department_service_types").upsert(
    {
      service_type_id: serviceTypeId,
      department_id: departmentId,
    },
    { onConflict: "service_type_id" },
  );

  return { success: error ? false : true };
}
