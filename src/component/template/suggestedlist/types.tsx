export type SuggestedListProps = {
  data?: SuggestedCardDetailsProps[];
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

export type RenderItemProps = {
  item?: SuggestedCardDetailsProps;
  index?: number;
};
