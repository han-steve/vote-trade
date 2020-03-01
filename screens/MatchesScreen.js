import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class MatchesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Betty Smith",
          theirProps: ["propA", "propC"],
          yourProps: ["propD", "propF"],
        },
        {
          name: ""
        },
      ]
    }
  }
  render() {
  return (
      <View>
        <Text style={styles.header}>Your Matches:</Text>
        <View style={styles.userCard}>
          <View>
            
          </View>
        </View>

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
