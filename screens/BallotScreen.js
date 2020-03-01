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
          description: 'The issuance of $2,900,000 of School Building Bonds for the purpose of renovating, improving, and ' + 
          'equipping school buildings, and the levying of a tax in payment thereof.'
        },
        {
          id: 1,
          name: 'PropB',
          description: 'The issuance of $93,445,000 of Road Bonds for the purpose of the construction, maintenance, and ' + 
          'operation of an interstate highway through the southwest forested region of the county, and the levying of a ' + 
          'tax in payment thereof.'
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
              <Text style={styles.propDescription}>{prop.description}</Text>
              <Text style={styles.propValue}>{prop.value}</Text>
              <Button title="For" onPress={() => this.onUpdate(prop.id, "For")}></Button>
              <Button title="Against" onPress={() => this.onUpdate(prop.id, "Against")}></Button>
              <Button title="I have no preference" onPress={() => this.onUpdate(prop.id, "I have no preference")}></Button>
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
  propValue: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '800'
  },
  propDescription: {
    marginBottom: 10
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
