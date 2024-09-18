import {UseFormSetValue} from 'react-hook-form'

type dataTypes={
  label: string; value: string
}
export type FormTextControllerTypes = {
  Label?: string;
  placeholder: string;
  name?: string;
  type?: string;
  rules: {required: boolean};
  onBlur?: (params:any) => void;
  onChange?:(params:any)=>void;
  onChangeText?: () => void;
  testId?:string;
  loading:boolean;
  data:dataTypes[];
  // isError:boolean;
  // errmessage:string;
};

type Inputs = {
  state: string;
  stateRequired:string
};

export type IField2={
  setValue: UseFormSetValue<Inputs>;
}