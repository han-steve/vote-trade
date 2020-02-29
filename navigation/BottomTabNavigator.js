import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import BallotScreen from '../screens/BallotScreen';
import SearchScreen from '../screens/SearchScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Ballot';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Ballot"
        component={BallotScreen}
        options={{
          title: 'Ballot',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Ballot':
      return 'Your Ballot';
    case 'Search':
      return 'Search Vote Traders';
  }
}
