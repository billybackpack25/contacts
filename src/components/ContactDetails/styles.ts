import colors from 'assets/theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    backgroundColor: colors.white,
  },
  ImageContainerWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailPhoto: {
    height: 300,
    resizeMode: 'cover',
  },
  imageContainer: {
    height: 300,
    justifyContent: 'center',
    flex: 1,
  },
  errorText: {
    alignSelf: 'center',
  },
  fullNameView: {
    padding: 20,
  },
  fullName: {
    fontSize: 23,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  actionGroup: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 17,
    paddingTop: 5,
  },
  numbersSection: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  numLeft: {
    flexDirection: 'row',
  },
  numSectionText: {
    paddingLeft: 10,
  },
  numRightSection: {
    flexDirection: 'row',
  },
  videoCallIconFix: {
    marginTop: -5,
  },
  headerRight: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
  },
});
