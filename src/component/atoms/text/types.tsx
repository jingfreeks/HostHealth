import { ReactNode } from "react";

export type textmode =
  | 'Text'
  | 'Title'
  | 'Stext'
  | 'TextNormal'
  | 'Htitle'
  | 'Stitle'
  | 'Htitlenormal'
  | 'Ptitle'
  | 'Pstitle'
  | 'TextNormalBold'
  | 'TextNormalRegular'
  | 'MtextBold'
  | 'ErrorText';

export type TextTypes = {
  TextMode?: textmode;
  nativeProps?: object;
  numberOfLines?:number;
  children?: ReactNode;
};
