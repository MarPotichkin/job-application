import type { Candidate } from "../../types/candidate";
import type { CandidateDTO } from "./candidate.dto";

export function mapCandidate(dto: CandidateDTO): Candidate {
  return {
    uuid: dto.uuid,
    candidateId: dto.candidateId,
    applicationId: dto.applicationId,
    fullName: `${dto.firstName} ${dto.lastName}`,
    email: dto.email,
  };
}
