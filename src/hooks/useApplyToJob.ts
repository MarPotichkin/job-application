import { useMutation } from "@tanstack/react-query";
import type { Candidate } from "../types/candidate";
import { applyToJob } from "../api/candidate/candidate.api";

type useApplyToJobProps = {
  jobId: string;
  candidate: Candidate;
};

export function useApplyToJob({ jobId, candidate }: useApplyToJobProps) {
  return useMutation({
    mutationFn: (repoUrl: string) => {
      if (!candidate) throw new Error("Candidate is required");
      return applyToJob({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        jobId,
        repoUrl,
      });
    },
  });
}
