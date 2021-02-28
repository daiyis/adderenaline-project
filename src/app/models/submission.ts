export interface Submission {
  submissionId: number;
  submittedAt: Date;
  candidates: Candidate[];
}

export interface Candidate {
  candidateId: number;
  name: string;
  submittedAt: Date;
  rating: number;
}
