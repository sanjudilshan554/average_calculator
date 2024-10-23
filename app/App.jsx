import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Calculator from '../components/Calculator'

const App = () => {
  return (
    <View>
       <Calculator/>
    </View>
  )
} 

export default App

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'green'
    }
})