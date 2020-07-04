import React from 'react'
import { View } from 'react-native'

import Amex from './amex'
import Mastercard from './mastercard'
import Visa from './visa'

const logos = {
  amex: {
    component: Amex,
    style: {
      marginLeft: 'auto'
    }
  },
  mastercard: {
    component: Mastercard,
    style: {
      marginLeft: 'auto'
    }
  },
  visa: {
    component: Visa,
    style: {
      marginLeft: 'auto', 
      marginRight:15
    }
  }
}

const Logo = (props) => {
  const item = logos[props.card]
  if(!item) return <View></View>
  const Component = item.component
  
  return(
    <View style={[item.style]}>
      <Component />
    </View>
  )
}
export default Logo