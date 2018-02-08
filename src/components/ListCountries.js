import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


const countryItem = (props) => (
    <View>
      <Text>{props.place}</Text>
    </View>
)

export default countryItem
