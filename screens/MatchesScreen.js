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
          id: 0,
          name: "Betty Smith",
          fors: ["propA"],
          againsts: ["propC"],
          yourFors: ["propD"],
          yourAgainsts: ["propF"],
          image: "../assets/images/default_profile_pic.jpg"
        },
        {
          id: 1,
          name: "Mike Scott",
          theirProps: ["propE", "propH"],
          yourProps: ["propG", "propI"], 
          image: "../assets/images/default_profile_pic.jpg"        
        },
      ]
    }
  }
  render() {
  return (
      <View>
        <Text style={styles.header}>Your Matches:</Text>
        {this.state.users.map(prop => {
          return (
            <View style={styles.userCard} key={users.id}>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: '../assets/images/default_profile_pic.jpg'}}
              />
              <Text style={styles.userName}>{prop.name}</Text>
              <Text>You will vote for {prop.fors[0]} and against {prop.againsts[0]}</Text>
              <Text>In return, {prop.name} will vote for {prop.yourFors[0]} and against {prop.yourAgainsts[0]}</Text>
            </View>
          )
        })
        }

      </View>
  );  
  }
  
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fafafa'
  },
  header: {
    fontSize: 30,
    fontWeight: "800"
  }, 
  userCard: {

  },
  userName: {

  },

});
