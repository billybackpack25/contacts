import colors from 'assets/theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  close: {
    paddingRight: 40,
  },
  title: {
    fontSize: 21,
  },
  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: colors.grey,
    marginBottom: 5,
  },
  footerBody: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 5,
  },
  footerDot: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: colors.grey,
  },
});
