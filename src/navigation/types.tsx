type BankForm={
  name?: string; address?: string; _id: string
}

export type RootNavigationProps = {
  BottomTab: undefined;
  app: undefined;
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
  auth: undefined;
  JobsDetails: undefined;
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
  ProfileDetails:undefined;
  ProfileBankInfo:undefined;
  CityJobsList:{cityId?:string};
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
    image:string;
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
  CompanyForm: {
    address: string;
    name: string;
    city: string;
    stateid: string;
    cityId: string;
    _id: string;
  };
  BankForm: BankForm;
  Home: undefined;
  Search: undefined;
  MyJob: undefined;
  TimeCard: undefined;
  TimeCard1: undefined;
  ProfileDetails:undefined;
  CityJobsList:{cityId?:string}
};
