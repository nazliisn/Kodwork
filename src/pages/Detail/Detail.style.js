import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    backgroundColor: '#f2f2f2',

    height: Dimensions.get('window').height / 6,
    padding: 5,
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#003d33',
  },
  locations_title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  locations: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  level_title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  level: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  info_container: {
    backgroundColor: 'white',
    margin: 4,
    paddingLeft: 5,
  },
  detail_title: {
    alignSelf: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 5,
    color: '#003d33',
  },
  button: {
    flexDirection: 'row',
  },
});
