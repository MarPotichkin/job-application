export interface CandidateDTO {
  uuid: string;
  candidateId: string;
  applicationId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ApplyToJobDTO {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
}
