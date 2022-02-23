import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import useFecth from '../../hook/useFetch';
import JobsCard from '../../components/JobsCard';
import Loading from '../../assert/Loading';
import Error from '../../assert/Error';

function Jobs({navigation}) {
  const {data, loading, error} = useFecth(Config.JOBS_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderJobs = ({item}) => {
    return (
      <JobsCard
        jobsData={item}
        onSelect={() => handleSelect(item.id)}></JobsCard>
    );
  };
  const handleSelect = id => {
    return navigation.navigate('DetailPage', {id});
  };

  return (
    <SafeAreaView>
      <FlatList data={data.results} renderItem={renderJobs} />
    </SafeAreaView>
  );
}
export default Jobs;
