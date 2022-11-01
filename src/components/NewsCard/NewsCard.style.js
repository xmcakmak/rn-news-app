import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  inner_container: {
    padding: 5,
  },
});
