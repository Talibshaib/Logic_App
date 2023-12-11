import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Nav from './src/component/Nav';
import One from './src/component/One';
import Incrementer from './src/component/Incrementer';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        {/* <Nav /> */}
        {/* <One /> */}
        <Incrementer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main:{
    margin:6,
    padding:6,
  }
});
