import type { Job } from "../../types/job";
import type { JobDTO } from "./jobs.dto";

export function mapJob(dto: JobDTO): Job {
  return {
    id: dto.id,
    title: dto.title,
  };
}
