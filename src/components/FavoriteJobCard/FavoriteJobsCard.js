import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Button from '../Button';
import styles from '../Card/Card.style';
import {useDispatch} from 'react-redux';

function FavoriteJobsCard({jobsData, onSelect}) {
  const dispacth = useDispatch();

  const handleRemove = () => {
    dispacth({type: 'REMOVE_LIST', payload: {favoriteJobID: jobsData.id}});
  };
  return (
    <View style={styles.favoriteJobCard.container}>
      <View style={styles.favoriteJobCard.body_container}>
        <View style={styles.favoriteJobCard.inner_container}>
          <Text style={styles.favoriteJobCard.name} numberOfLines={1}>
            {jobsData.name}
          </Text>
          <Text style={styles.favoriteJobCard.company_name}>
            {jobsData.company.name}
          </Text>
          <Text style={styles.favoriteJobCard.location}>
            {jobsData.locations[0].name}
          </Text>
        </View>
      </View>
      <Text style={styles.favoriteJobCard.level}>
        {jobsData.levels[0].name}
      </Text>
      <Button title="Remove" onPress={handleRemove}></Button>
    </View>
  );
}
export default FavoriteJobsCard;
