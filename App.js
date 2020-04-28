/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator, Authentication } from './src/common/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/common/theme';
import { BestGrid } from './src/common/components/BestGrid/BestGrid'

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          {/* <TabNavigator /> */}
          <Authentication />
        </SafeAreaView>
      </PaperProvider>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
