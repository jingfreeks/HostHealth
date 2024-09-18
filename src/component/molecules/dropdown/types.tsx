import {UseFormSetValue} from 'react-hook-form'

type dataTypes={
    label: string; value: string
}
export type dropdownTypes = {
  loading: boolean;
  data: dataTypes[];
  value:string;
  // setDvalue:(params:string,params1:string)=>void;
  isError?:boolean;
  errmessage?:string;
  name:string;
  onChange:(params:any)=>void;
};
