import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'

type ContainerProps = any
const Container = ({style, children}: ContainerProps) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>
          {children}
      </View>
    </ScrollView>
  )
}

export default Container;