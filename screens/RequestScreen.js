import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class MatchesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //put stuff here

    }
  }
  render() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>      
      <Text>You currently have no requests.</Text>
    </View>
  );  
  }
  
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    fontSize: 30,
    // fontWeight: bold
  }, 
  userCard: {

  }
});
