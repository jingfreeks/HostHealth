export type RoutesProps = {
  route: {
    params: {
      jobdetail: JobDetailsProps;
    };
  };
};

export type JobDetailsProps = {
  image: string;
  address: string;
  jobtitle: string;
  joborderno: string;
  company: string;
  salaryrange: string;
  shift: string;
};
