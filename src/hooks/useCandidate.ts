import { useQuery } from "@tanstack/react-query";
import { getCandidateByEmail } from "../api/candidate/candidate.api";

export function useCandidateByEmail(email: string) {
  return useQuery({
    queryKey: ["candidate", email],
    queryFn: () => getCandidateByEmail(email),
    enabled: Boolean(email),
  });
}
