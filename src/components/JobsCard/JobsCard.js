import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobsCard.style';

function JobsCard({jobsData, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
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
      </View>
    </TouchableWithoutFeedback>
  );
}
export default JobsCard;
