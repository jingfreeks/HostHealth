export type TextInputProps = {
  Label?: string;
  onChangeText?: (params:any) => void;
  onBlur?: (params:any) => void;
  value?: string;
  type?: string;
  isError?: boolean;
  errmessage?: string;
  placeholder?: string;
  testId?:string;
};
