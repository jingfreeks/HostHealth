export type TextInputProps = {
  Label?: string;
  onChangeText?: () => void;
  value?: string;
  type?: string;
  isError?: boolean;
  errmessage?: string;
  placeholder?: string;
};
