export interface Submission {
  submissionId: number;
  jobOrderId: number;
  jobTitle: string;
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
