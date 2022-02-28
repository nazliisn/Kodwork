import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from '../Card/Card.style';

function JobsCard({jobsData, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.jobCard.container}>
        <View style={styles.jobCard.body_container}>
          <View style={styles.jobCard.inner_container}>
            <Text style={styles.jobCard.name} numberOfLines={1}>
              {jobsData.name}
            </Text>
            <Text style={styles.jobCard.company_name}>
              {jobsData.company.name}
            </Text>
            <Text style={styles.jobCard.location}>
              {jobsData.locations[0].name}
            </Text>
          </View>
        </View>
        <Text style={styles.jobCard.level}>{jobsData.levels[0].name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default JobsCard;
