import type { Candidate } from "../../types/candidate";
import { apiFetch } from "../client";
import type { ApplyToJobDTO, CandidateDTO } from "./candidate.dto";
import { mapCandidate } from "./candidate.mapper";

export async function getCandidateByEmail(email: string): Promise<Candidate> {
  const dto = await apiFetch<CandidateDTO>(
    `/api/candidate/get-by-email?email=${encodeURIComponent(email)}`,
  );
  return mapCandidate(dto);
}

export async function applyToJob(data: ApplyToJobDTO): Promise<void> {
  await apiFetch(`/api/candidate/apply-to-job`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
