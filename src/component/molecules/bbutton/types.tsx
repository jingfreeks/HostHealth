export type BbuttonProps = {
  onPress?: () => void;
  title: string;
  border: number;
  bcolor: string;
  padding?: number;
  borderw?: number;
  borderc?: string;
  loaders?: boolean;
  loaderColor?: string;
  loaderSize?: 'small' | 'large';
  testId?:string;
};
