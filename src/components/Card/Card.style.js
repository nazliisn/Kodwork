import {StyleSheet, Dimensions} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  body_container: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
  inner_container: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 5,
  },
  company_name: {
    fontSize: 15,
    paddingBottom: 5,
  },

  location: {
    backgroundColor: 'red',
    borderRadius: 15,
    color: 'white',
    fontSize: 16,
    padding: 6,

    fontWeight: 'bold',
    alignSelf: 'baseline',
  },
  level: {
    paddingRight: 5,
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 15,
  },
});

export default {
  jobCard: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      minHeight: Dimensions.get('window').height / 5,
    },
  }),

  favoriteJobCard: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      minHeight: 175,
    },
  }),
};
