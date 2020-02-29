import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

const props = [
  {
    name: 'PropA',
    value: 'For'
  },
  {
    name: 'PropB'

  }
]

export default function BallotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>This is what you'll see on your ballot on election day:</Text>
      {props.map(prop => {
        return (
          <View style={styles.propCard}>
            <Text style={styles.propTitle}>{prop.name}</Text>
            <Text>{prop.value}</Text>

          </View>
        )
      })
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  headerText: {
    fontSize: 30,
    fontWeight: '800',
  },
  propCard: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10
  },
  propTitle: {
    fontSize: 20,

  }
});
