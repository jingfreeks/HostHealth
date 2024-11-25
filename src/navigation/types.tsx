type BankForm = {
  name?: string;
  address?: string;
  _id: string;
};

type JobsDetails = {
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
  jobId?: string;
  status?: string;
  _id?: string;
};

type JobsInfoProps = {
  image: string;
  cityname?: string;
  statename?: string;
  jobtitle: string;
  compname?: string;
  company: string;
  deptname?: string;
  department: string;
  weeks?: string;
  shiftname?: string;
  shift: string;
  match?: string;
  salaryrange: string;
  address?: string;
  joborderno?: string;
  id?: number;
  bookmark: boolean;
  _id: string;
  city: string;
  cityId: string;
};
export type RootNavigationProps = {
  BottomTab: undefined;
  app: undefined;
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
  auth: undefined;
  JobsDetails: undefined;
  AdminJobDetails: {adminJobDetail: JobsDetails};
  Home: undefined;
  Search: undefined;
  MyJob: undefined;
  TimeCard: undefined;
  TimeCard1: undefined;
  OnBoardingProfile: undefined;
  OnBoardingBankInfo: undefined;
  StateForm: undefined;
  Cityform: undefined;
  DepartmentForm: undefined;
  ShiftForm: undefined;
  CompanyForm: undefined;
  BankForm?: BankForm;
  SkillsForm?: {name: string};
  JobsForm?: JobsInfoProps;
  ProfileDetails: undefined;
  ProfileBankInfo: undefined;
  CityJobsList: {cityId?: string};
};

export type AppNavigationProps = {
  JobsDetails: {
    jobdetail: {
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
      jobId?: string;
      status?: string;
      _id?: string;
    };
  };
  AdminJobDetails: {
    adminJobDetail: {
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
      jobId?: string;
      status?: string;
      _id?: string;
    };
  };
  StateForm: {
    name: string;
    _id: string;
  };
  Cityform: {
    name: string;
    state: string;
    image: string;
    _id: string;
  };
  DepartmentForm: {
    name: string;
    _id: string;
  };
  ShiftForm: {
    title: string;
    _id: string;
  };
  SkillsForm?: {name: string; _id: string};
  CompanyForm: {
    address: string;
    name: string;
    city: string;
    stateid: string;
    cityId: string;
    _id: string;
  };
  JobsForm: JobsInfoProps;
  BankForm: BankForm;
  Home: undefined;
  Search: undefined;
  MyJob: undefined;
  TimeCard: undefined;
  TimeCard1: undefined;
  ProfileDetails: undefined;
  CityJobsList: {cityId?: string};
};
