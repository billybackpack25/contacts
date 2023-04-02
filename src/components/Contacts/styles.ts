import colors from 'assets/theme/colors';
import {Dimensions, StyleSheet} from 'react-native';

export const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  horizontalItem: {},
  editItem: {
    backgroundColor: colors.grey,
    // flex: 1,
    width: 150,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  editText: {
    fontSize: 17,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
  },
  listEmptyContainer: {padding: 100},
  contactBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingVertical: 15,
    height: 100,
    width: screenWidth,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLeft: {
    paddingLeft: 20,
  },
  contactPhoto: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 17,
    color: colors.white,
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
  },
  itemSeparator: {
    height: 1,
    opacity: 0.5,
    backgroundColor: colors.grey,
  },
  floatingActionBtn: {
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
