import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  loginPageContainer: {marginTop: 100},
  logo: {
    height: 120,
    width: '100%',
    marginBottom: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '100',
  },
  btn: {
    marginTop: 10,
  },
  createSection: {
    flexDirection: 'row',
  },
  registerText: {
    fontSize: 17,
  },
  registerBtn: {
    paddingLeft: 5,
    color: colors.primary,
    fontSize: 16,
  },
});
