import { useMutation } from "@tanstack/react-query";
import type { Candidate } from "../types/candidate";
import { applyToJob } from "../api/candidate/candidate.api";
import type { ApiError } from "../api/errors/api-error";

type useApplyToJobProps = {
  jobId: string;
  candidate: Candidate;
  onSuccess?: () => void;
  onError?: (error: ApiError) => void;
};

export function useApplyToJob({
  jobId,
  candidate,
  onSuccess,
  onError,
}: useApplyToJobProps) {
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
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
    onError: (err) => {
      console.error(err.message);
      if (onError) onError(err);
    },
  });
}
