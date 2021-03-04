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
  shortName: string;
  initials: string;
  position: string;
  summary: string;
  thumbnailUrl: string;
  photoUrl: string;
  resumeUri: string;
  location: string;
  currentEmployer: string;
  rating: number;
  salaryMinValue: number;
  salaryMaxValue: number;
}
