export interface JobOrder {
  jobOrderID: number;
  jobTitle: string;

  daysOpen: number;
  totalCandidates: number;
  submitted: number;
  interviews: number;
}
