// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Installed this 'npm install react-native-progress react-native-svg'
import * as Progress from 'react-native-progress'; // Import the library

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>

        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{ width: 64, height: 64 }}
        />

        <Text style={styles.text}>Hello, React Native!</Text>

      </View>

      <View>
        <View>
          <Text style={styles.heroText1}>This is a simple React Native app.</Text>
        </View>

        <View>
          <Text style={styles.heroText2}>This is a simple React Native app.</Text>
        </View>

      </View>

      <View style={{ marginTop: 16, flexDirection: 'row', margin: 16 }}>

        <View style={{ backgroundColor: '#eee', padding: 16, borderRadius: 8, marginRight: 16, width: '50%' }}>

          <View style={styles.centerContent}>
            <Progress.Circle
              size={150}          // Size of the circle
              thickness={10}      // Thickness of the progress line
              progress={0.55}     // Progress value (0.75 = 75%)
              showsText={true}    // Automatically shows the percentage
              color={'#2196F3'}   // Color of the progress fill
              borderWidth={2}     // Removes the outer border for a cleaner look
              textStyle={styles.progressText} // Style for the percentage text
            />
          </View>

          <View>
            <Text>Step</Text>
            <Text>500</Text>
          </View>

        </View>

        <View style={{ backgroundColor: '#eee', padding: 16, borderRadius: 8, width: '50%' }} >
          <View style={styles.centerContent}>
            <Progress.Circle
              size={150}          // Size of the circle
              thickness={10}      // Thickness of the progress line
              progress={0.55}     // Progress value (0.75 = 75%)
              showsText={true}    // Automatically shows the percentage
              color={'#2196F3'}   // Color of the progress fill
              borderWidth={2}     // Removes the outer border for a cleaner look
              textStyle={styles.progressText} // Style for the percentage text
            />
          </View>

          <View>
            <Text>Step</Text>
            <Text>500</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    color: '#000',
    marginLeft: 16,
    marginTop: 16,
  },
  heroText1: {
    fontSize: 25,
    color: '#000',
    marginLeft: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
  heroText2: {
    fontSize: 18,
    color: '#000',
    marginLeft: 16,
    marginTop: 16,
  },
})
