import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Button({title, onPress, iconName}) {
  return (
    <TouchableOpacity style={styles.toucble} onPress={onPress}>
      <Text style={styles.title}>
        <Icon name={iconName} size={25}></Icon> {title}
      </Text>
    </TouchableOpacity>
  );
}
export default Button;
