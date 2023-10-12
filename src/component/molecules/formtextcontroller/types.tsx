export type FormTextControllerTypes = {
  Label?: string;
  placeholder: string;
  name?: string;
  rules: {required: boolean};
  onBlur?: (params) => void;
  onChangeText?: () => void;
};
