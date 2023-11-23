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

export type ProfileProps = {
  id: number;
  username: string;
  full_name: string;
  avatar_url: string;
  website: string;
};

export type LoginProps = {
  id: number;
  username: string;
  full_name: string;
  avatar_url: string;
  website: string;
};
export type SuggestedJobSateProps = {
  data?: SuggestedCardDetailsProps[];
  loading: boolean;
};

export type SignupStateProps = {
  data?: ProfileProps;
  loading: boolean;
};

export type LoginStateProps = {
  data?: LoginProps;
  loading: boolean;
};

export type AuthStateProps = {
  user: string;
  token: string;
};
export type State = {
  pcities: PcitiesStateProps;
  suggetedjob: SuggestedJobSateProps;
  signup: SignupStateProps;
  login: LoginStateProps;
  auth: AuthStateProps;
};
