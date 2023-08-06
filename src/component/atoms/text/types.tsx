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
  | 'MtextBold';

export type TextTypes = {
  TextMode?: textmode;
  nativeProps?: object;
  children?: ReactNode;
};
