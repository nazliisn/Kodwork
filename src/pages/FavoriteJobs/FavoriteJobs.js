import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import FavoriteJobsCard from '../../components/FavoriteJobCard';

function FavoriteJobs() {
  const list = useSelector(s => s.favoriteList);

  const renderCard = ({item}) => {
    return <FavoriteJobsCard jobsData={item}></FavoriteJobsCard>;
  };

  return (
    <View>
      <FlatList data={list} renderItem={renderCard} />
    </View>
  );
}
export default FavoriteJobs;
