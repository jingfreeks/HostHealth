export type PrevNextTypes = {
  nextOnPress: () => void;
  prevOnPress?: () => void;
  isPrevView?: boolean;
  loadernext: boolean;
  testIds: {prevOnPress: string; nextOnPress: string};
};
