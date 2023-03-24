import colors from 'assets/theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsTextWrapper: {
    // padding: 10,
    paddingVertical: 20,
    paddingLeft: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftView: {},
  rightView: {},
  settingsTitle: {
    fontSize: 17,
  },
  settingsSubTitle: {
    opacity: 0.5,
    paddingTop: 5,
  },
  rightIcon: {
    paddingRight: 10,
  },
});
