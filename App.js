import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from "react";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title= "패션" 
                color= "#000000"/>
        <Button title= "뷰티"
                color= "#000000" />
        <Button title= "액세서리" 
                color= "#000000"/>
        <Button title= "라이프"
                color= "#000000" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
