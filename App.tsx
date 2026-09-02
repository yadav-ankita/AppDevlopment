import React from 'react';
import { View, Text, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ElevatedCards from './components/ElevatedCards';
import ContactList from './components/ContactList'
import ComicCard from './components/ComicCard'
import ColorGenerator from './components/ColorGenerator'
import PasswordGenerator from './components/PasswordGenerator'
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <FlatCards />
          <ElevatedCards />
          <FancyCard/>
          <ContactList/>
          <ActionCard/>   */}
          {/* <ComicCard/>    */}
          {/* <PasswordGenerator/>    */}
          <ColorGenerator/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: 'flex-start',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
  text: {
    fontSize: 20,
  },
});

export default App;