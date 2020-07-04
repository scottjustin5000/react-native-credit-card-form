import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from './logo'
import Chip from './chip'
const Card = (props) => {

  const value = props.direction === 'forward' ? 180 : 0
  const animatedValue = new Animated.Value(value)

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  })
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })

 frontAnimatedStyle = {
    transform: [
      { rotateX: frontInterpolate}
    ]
  }
   backAnimatedStyle ={
    transform: [
      { rotateX: backInterpolate }
    ]
  }

  useEffect(()=> {
    if(props.direction === 'forward') {
      Animated.spring(animatedValue,{
       toValue: 0,
       friction: 8,
       tension: 10
     }).start()
    } else if(props.direction === 'back') {
        Animated.spring(animatedValue, {
          toValue: 180,
          friction: 8,
          tension: 10,
          useNativeDriver: true
        }).start()
    }
  },[props.direction])
   
  return (
  <View style={styles.container}>
    <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
      <LinearGradient style={{ borderRadius:10 }} colors={['#0f509e','#1399cd']}>
        <View style={styles.gradientView}>
          <View style={styles.assetWrapper}> 
          <Chip></Chip>
          <Logo card={props.card} />
          </View>
          <View style={styles.numberWrap}>
            <Text style={styles.numberText}>{props.number || '1234  5678  9101  1121' }</Text> 
          </View>
          <View style={styles.detailWrapper}>
              <Text style={styles.detailText}>{props.name || 'Jane Doe'}</Text> 
              <Text style={[styles.detailText, styles.expiry]}>{props.expiry || '12/29'}</Text> 
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
    <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
      <View style={styles.innerBack}>
        <View style={styles.strip} />
        <View style={styles.signatureBlock}>
          <View style={styles.ccvOuter}>
            <View style={styles.ccvInner}>
              <View style={{ marginTop: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }} />
              <View style={{ marginTop: 4, borderBottomColor: '#ccc', borderBottomWidth: 1 }} />
              <View style={{ marginTop: 4, borderBottomColor: '#ccc', borderBottomWidth: 1 }} />
            </View>
            <View>
              <Text style={ styles.ccvText }>{props.ccv || 'ccv'}</Text> 
            </View>
          </View>
        </View> 
      </View>
    </Animated.View>
  </View>
  )

}
const styles= StyleSheet.create({
  container:{
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  gradientView: {
    marginTop:30, 
    height:170, 
    marginLeft: 10,
    marginRight: 10
  },
  assetWrapper: {
    height:10,
    display:'flex', 
    flexDirection: 'row'
  },
  detailWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent:'space-between', 
    marginTop:20, 
    marginLeft: 10
  },
  detailText: {
    fontSize: 20, 
    fontFamily: 'Helvetica'
  },
  expiry: {
    marginRight:20
  },
  numberWrap: {
    marginTop:50,
    marginLeft:10
  },
  numberText: {
    fontSize: 26, 
    fontFamily: 'Helvetica'
  },
  flipCard: {
    borderRadius:10,
    width: 320,
    height: 200,
    shadowColor: 'black',
          shadowOffset: {
             width: 1,
             height: 1,
          },
          shadowOpacity:.9,
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    backgroundColor: '#1399cd',
    position: "absolute",
    top: 0,
  },
  innerBack: {
    borderRadius:10
  },
  strip: {
    marginTop: 25,
    height:40, 
    backgroundColor: '#000'
  },
  signatureBlock: {
    width:200, 
    height:30, 
    backgroundColor:'#fff', 
    marginTop: 60, 
    marginLeft:20
  },
  ccvOuter: {
    display: 'flex',
    flexDirection:'row'
  },
  ccvInner: {
    width: 120,  
    marginLeft:20, 
    marginRight:20 
  },
  ccvText: {
    marginTop: 5, 
    fontSize: 14, 
    fontFamily: 'Helvetica'
  }
 })

export default Card