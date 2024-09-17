export type RootNavigationProps = {
  BottomTab: undefined;
  app: undefined;
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
  auth: undefined;
  JobsDetails:undefined;
  Home:undefined;
  Search:undefined;
  MyJob:undefined;
  TimeCard:undefined;
  TimeCard1:undefined;
  OnBoardingProfile:undefined;
  OnBoardingBankInfo:undefined;
  StateForm:undefined;
  Cityform:undefined;
  DepartmentForm:undefined
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
  StateForm:{
    name:string;
    _id:string;
  };
  Cityform:{
    name:string;
    state:string;
    _id:string;
  }
  DepartmentForm:{
    name:string;
    _id:string;
  };
  Home:undefined;
  Search:undefined;
  MyJob:undefined;
  TimeCard:undefined;
  TimeCard1:undefined;
};
