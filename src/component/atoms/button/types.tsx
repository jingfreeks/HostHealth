import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  bcolor: string;
  border: number;
  borderw?: number;
  borderc?: string;
  onPress: () => void;
  padding?: number;
  testId?:string;
};
