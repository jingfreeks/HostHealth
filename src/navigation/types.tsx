export type RootNavigationProps = {
  BottomTab:undefined;
  app: undefined;
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};

export type AppNavigationProps={
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
      jobId?:string;
      _id?:string;
    };
  },
  BottomTab:undefined;
}