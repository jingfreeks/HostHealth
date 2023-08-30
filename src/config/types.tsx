export type PcitiesStateProps = {
  data?: PopularListDetails[];
  loading: boolean;
};

export type PopularListDetails = {
  image: string;
  city: string;
  state: string;
  matches: string;
  salary: string;
};

export type SuggestedCardDetailsProps = {
  image?: string;
  city?: string;
  state?: string;
  jobtitle?: string;
  company?: string;
  dept?: string;
  weeks?: string;
  shift?: string;
  match?: string;
  salaryrange?: string;
  address?: string;
  joborderno?: string;
  id?: number;
};

export type SuggestedJobSateProps = {
  data?: SuggestedCardDetailsProps[];
  loading: boolean;
};

export type State = {
  pcities: PcitiesStateProps;
  suggetedjob: SuggestedJobSateProps;
};
