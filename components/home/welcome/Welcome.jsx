import React from 'react'
import {useRouter} from 'expo-router'
import {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Flatlist
} from 'react-native'

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Boss</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}/>
        </View>
      </View>
    </View>
  )
}

export default Welcome