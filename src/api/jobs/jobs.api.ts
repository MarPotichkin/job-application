import type { Job } from "../../types/job";
import { apiFetch } from "../client";
import { mapJob } from "./jobs.mapper";

export async function getJobs(): Promise<Job[]> {
  const data = await apiFetch<Job[]>("/api/jobs/get-list");
  return data.map(mapJob);
}
