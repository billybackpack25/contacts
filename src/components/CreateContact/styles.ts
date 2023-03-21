import colors from 'assets/theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageAndText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  chooseImageText: {
    paddingTop: 10,
    color: colors.primary,
  },
  fav: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favText: {
    fontSize: 17,
  },
  // RBSheet Picker
  pickerContentWrapper: {
    paddingHorizontal: 20,
  },
  pickerRow: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  pickText: {
    fontSize: 17,
    paddingLeft: 17,
  },
});
