export type TextInputProps = {
  Label?: string;
  onChangeText?: (params) => void;
  onBlur?: (params) => void;
  value?: string;
  type?: string;
  isError?: boolean;
  errmessage?: string;
  placeholder?: string;
};
