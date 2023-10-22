export type FormTextControllerTypes = {
  Label?: string;
  placeholder: string;
  name?: string;
  type?: string;
  rules: {required: boolean};
  onBlur?: (params) => void;
  onChangeText?: () => void;
};
