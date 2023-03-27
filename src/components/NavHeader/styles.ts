import colors from 'assets/theme/colors';
import {Platform, StyleSheet} from 'react-native';

const headerHeight = Platform.OS === 'android' ? 50 : 90;
const paddingTop = Platform.OS === 'android' ? 10 : 60;
const buttonPosition = Platform.OS === 'android' ? 12 : 60;
const rightheaderPosition = Platform.OS === 'android' ? 12 : 58;

export default StyleSheet.create({
  header: {
    paddingTop: paddingTop,
    paddingBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    height: headerHeight,
  },
  mainNavButtonView: {position: 'absolute', left: 10, top: buttonPosition},
  goBackContainer: {
    position: 'absolute',
    left: 10,
    top: buttonPosition,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    color: colors.link,
    fontSize: 17,
  },
  routeName: {fontSize: 17, fontWeight: '500'},
  rightHeaderView: {position: 'absolute', right: 10, top: rightheaderPosition},
});
