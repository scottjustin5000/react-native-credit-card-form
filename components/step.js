import React from 'react'

import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet } from 'react-native'

const Step = (props) => {
 return (
    <View style={styles.container}>
    <View style={styles.subContainer}>
      <Text style={styles.stepText}>{props.value && props.value.length ? props.label : ''}</Text>
    </View>
    <View style={{margin:8}}>
      <TextInput 
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={props.onTextChange}
        placeholder={props.placeholder} 
        style={styles.textInput} 
        autoFocus={true} />
      </View> 
    </View>
 )
}
const styles= StyleSheet.create({
  container:{
   height:'100%',
   width:'100%'
  },
  subContainer:{
    width:'100%',
    marginTop: 8,
    display:'flex',
    color:'#1399cd',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  textInput: { 
    width:'100%', 
    padding: 8, 
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1 
  },
  stepText: {
    color:'#1399cd', 
    fontWeight: 'bold'
  }
 })

export default Step