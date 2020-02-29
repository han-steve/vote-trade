import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

const propA = {

}

export default function BallotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>This is what you'll see on your ballot on election day:</Text>

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

  }
});
