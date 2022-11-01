import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: Dimensions.get('window').height / 4,
  },
  title: {},
  description: {},
});
