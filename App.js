import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import CountryItem from './src/components/ListCountries'

export default class App extends React.Component {

  state = {
    placeName : '',
    places : []
  }

  placeNameChanged = (value) => {
    this.setState({
      placeName : value
    })
  }

  addPlacePressed = () => {

  this.setState({
    ...this.state,
    places : this.state.places.concat({
        name : this.state.placeName,
        image : 'someimage'
    })
  })
}

  render() {

    const placesOutput = this.state.places.map((place,index) => {
          return <CountryItem place={place}  />
        })

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput value={this.state.placeName} style={styles.inputContainer} placeholder = 'Enter Country Name' onChangeText = {this.placeNameChanged} />
          <Button title = "Add" onPress={this.addPlacePressed} />
        </View>

        <View>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer : {
    width: '70%',
    borderColor : 'gray',
    borderWidth : 1,
    padding :10

  }
});
