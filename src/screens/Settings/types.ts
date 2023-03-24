export type SettingOptionsType = {
  title: string;
  subTitle: string | null;
  onPress: () => void;
}[];

export type PreferenceList = {
  name: string;
  selected: boolean;
  onPress: () => void;
}[];
