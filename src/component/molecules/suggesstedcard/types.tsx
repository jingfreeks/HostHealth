export type SuggestedCardProps = {
  data: SuggestedCardDetailsProps;
};
type companyInfo={
  address?:string;
  name?:string;
}
export type SuggestedCardDetailsProps = {
  image?: string;
  cityname?: string;
  statename?: string;
  jobtitle?: string;
  compname?: string;
  deptname?: string;
  weeks?: string;
  shiftname?: string;
  match?: string;
  salaryrange?: string;
  address?: string;
  joborderno?: string;
  id?: number;
  bookmark: boolean;
  companyinfo:companyInfo;
  departmentinfo:{name?:string};
  shiftinfo:{title?:string};
  _id: string;
};
