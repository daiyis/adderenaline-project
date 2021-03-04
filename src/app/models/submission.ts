import { Document } from '.';

export interface Submission {
  submissionId: number;
  jobOrderId: number;
  jobTitle: string;
  submittedAt: Date;
  candidates: Candidate[];
}

export interface Candidate {
  id: number;
  fullName: string;
  position: string;
  thumbnailUrl: string;
  resumeUri: string;
  location: string;
  currentEmployer: string;
  rating: number;
}
