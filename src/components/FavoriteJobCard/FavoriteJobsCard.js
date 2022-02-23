import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Button from '../Button';
import styles from './FavoriteJobsCard.style';
import {useDispatch} from 'react-redux';

function FavoriteJobsCard({jobsData, onSelect}) {
  const dispacth = useDispatch();

  const handleRemove = () => {
    dispacth({type: 'REMOVE_LIST', payload: {favoriteJobID: jobsData.id}});
  };
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <View style={styles.inner_container}>
          <Text style={styles.name} numberOfLines={1}>
            {jobsData.name}
          </Text>
          <Text style={styles.company_name}>{jobsData.company.name}</Text>
          <Text style={styles.location}>{jobsData.locations[0].name}</Text>
        </View>
      </View>
      <Text style={styles.level}>{jobsData.levels[0].name}</Text>
      <Button title="Remove" onPress={handleRemove}></Button>
    </View>
  );
}
export default FavoriteJobsCard;
