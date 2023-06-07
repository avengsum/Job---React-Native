import React from 'react'
import { View, Text } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native-web'
import { COLORS, SIZES } from '../../../constants'

const Popularjobs = () => {

  const router = useRouter();
  const isLoading = false
  const error = false

  return (
    <View>
      <View>
        <Text style={styles.headerTitle}>
          Popular jobs
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} /> ) : error ? (
            <Text>Something went wrong</Text>
          ): (
            <FlatList
            data={[1,2,3,4,5,6,7,8]}
            renderItem={({item}) => (
              <Popularjobs
              item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            />
          
        )}
      </View>
    </View>
  )
}

export default Popularjobs