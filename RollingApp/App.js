import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, StatusBar} from 'react-native'

import { colors, parameters } from './src/global/styles'
import HomeScreen from './src/screens/HomeScreen'

const SCREEN_WIDTH = Dimensions.get('window').width

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style='light' backgroundColor={"#2058c0"} hidden={false} translucent = {true} /> */}
      <HomeScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

})

export default App