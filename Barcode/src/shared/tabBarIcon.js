import * as React from 'react';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

const tabBarIcon = name => ({tintColor}) => (
    <FontAwesome5
      style = {{backgroundColor: 'transparent'}}
      name = {name}
      color = {tintColor}
      size ={24}
    />
  );

  export default tabBarIcon;