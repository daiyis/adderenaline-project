export interface Submission {
  submissionId: number;
  submittedAt: Date;
  candidates: Candidate[];
}

export interface Candidate {
  candidateId: number;
  name: string;
  initials: string;
  thumbnailUrl: string;
  submittedAt: Date;
  rating: number;
}
