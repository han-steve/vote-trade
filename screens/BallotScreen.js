import * as React from 'react';
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default class BallotScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propositions: [
        {
          id: 0,
          name: 'PropA',
          value: 'For'
        },
        {
          id: 1,
          name: 'PropB'

        }
      ]
    }
  }

  onUpdate = (i, value) => {
    this.setState(state => {
      const propositions = state.propositions.map((prop, j) => {
        if (j === i) {
          prop.value = value;
          return prop;
        } else {
          return prop;
        }
      });
      return {
        propositions,
      };
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>This is what you'll see on your ballot on election day:</Text>
        {this.state.propositions.map(prop => {
          return (
            <View style={styles.propCard} key={prop.id}>
              <Text style={styles.propTitle}>{prop.name}</Text>
              <Text>{prop.value}</Text>
              <Button title="Against" onPress={() => this.onUpdate(prop.id, "Against")}></Button>
              <Button title="For" onPress={() => this.onUpdate(prop.id, "For")}></Button>
            </View>
          )
        })
        }
      </View >
    );
  }
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
