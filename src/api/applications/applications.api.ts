import type { Application } from "../../types/application";
import { apiFetch } from "../client";
import type { ApplicationDTO } from "./applications.dto";
import { mapApplication } from "./applications.mapper";

export async function getApplicationById(id: string): Promise<Application> {
  const dto = await apiFetch<ApplicationDTO>(`/api/applications/${id}`);
  return mapApplication(dto);
}
