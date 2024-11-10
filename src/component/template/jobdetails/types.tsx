import {ReactNode} from 'react';

type jobDetails = {
  image: string;
  address: string;
  jobtitle: string;
  joborderno: string;
  company: string;
  compaddress: string;
  salaryrange: string;
  shift: string;
  jobId: string;
  status: string;
  shiftname?: string;
  compname: string;
  match: string;
  _id: string;
};
export type JobDetailsTemplateProps = {
  children?: ReactNode;
  data: jobDetails;
};
