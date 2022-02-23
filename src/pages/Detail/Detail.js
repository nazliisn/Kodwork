import React, {useCallback} from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';

import HtmlView from 'react-native-htmlview';

import useFetch from '../../hook/useFetch';
import Config from 'react-native-config';
import styles from './Detail.style';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import Loading from '../../assert/Loading';
import Error from '../../assert/Error';

function Detail({route}) {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.DETAILS_URL}${id}`);
  const dispacth = useDispatch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const Open_URL = ({url}) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <Button title="Submit" onPress={handlePress} iconName="export"></Button>
    );
  };
  const onFavorite = () => {
    return dispacth({type: 'ADD_LIST', payload: {favoriteJob: data}});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.locations_title}>
          Locations:{' '}
          <Text style={styles.locations}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'No information'}
          </Text>
        </Text>
        <Text style={styles.level_title}>
          Level:{' '}
          <Text style={styles.level}>
            {' '}
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'No information'}
          </Text>
        </Text>

        <Text style={styles.detail_title}>Job Detail</Text>
      </View>
      <ScrollView>
        <View style={styles.info_container}>
          <HtmlView value={data.contents}></HtmlView>
          <View style={styles.button}>
            <Open_URL url={data.refs.landing_page}></Open_URL>

            <Button
              title="Favorite Job"
              onPress={onFavorite}
              iconName="cards-heart"></Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Detail;
