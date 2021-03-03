import { Document } from '.';

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
  resume: string;
  formattedResume: string;
  documents: Document[];
}

// import { Attachment } from '../attachment';
// import { PhoneNumber } from '../phone-number';

// export interface Candidate {
//   candidateID: number;
//   name: string;
//   firstName: string;
//   lastName: string;
//   salutation: string;
//   phone: PhoneNumber;
//   mobile: PhoneNumber;
//   email: string;
//   otherEmail: string[];
//   address: Address;

//   currentPosition: string;
//   currentEmployer: string;
//   currentSalary: WorkTypeSalary;
//   availability: StartDate;

//   idealPosition: string;
//   idealSalary: WorkTypeSalary;
//   otherSalaries: WorkTypeSalary[];

//   recruiters: number[];
//   socialLinks: SocialLinks;
//   headshotThumbnailUrl: string;
//   headshotUrl: string;
//   initials: string;
//   rank: number;

//   resume: Attachment;
//   formattedResume: Attachment;
// }
