import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from 'react-native-progress'

const App = () => {
  // Progress values
  const stepProgress = 0.55 // 55%
  const calorieProgress = 0.75 // 75%
  const waterProgress = 0.4 // 40%

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Header Section */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Hello, User! 👋</Text>
              <Text style={styles.subGreeting}>Ready for your workout today?</Text>
            </View>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={styles.avatar}
            />
          </View>

          {/* Stats Cards Row */}
          <View style={styles.statsContainer}>

            {/* Steps Card */}
            <View style={styles.statCard}>
              <View style={styles.centerContent}>
                <Progress.Circle
                  size={140}
                  thickness={12}
                  progress={stepProgress}
                  showsText={true}
                  color={'#4CAF50'}
                  borderWidth={0}
                  textStyle={styles.progressText}
                  formatText={(progress) => `${Math.round(progress * 100)}%`}
                />
              </View>
              <View style={styles.statInfo}>
                <Text style={styles.statValue}>5,432</Text>
                <Text style={styles.statLabel}>Steps Today</Text>
                <Text style={styles.statTarget}>Goal: 10,000</Text>
              </View>
            </View>

            {/* Calories Card */}
            <View style={styles.statCard}>
              <View style={styles.centerContent}>
                <Progress.Circle
                  size={140}
                  thickness={12}
                  progress={calorieProgress}
                  showsText={true}
                  color={'#FF6B6B'}
                  borderWidth={0}
                  textStyle={styles.progressText}
                  formatText={(progress) => `${Math.round(progress * 100)}%`}
                />
              </View>
              <View style={styles.statInfo}>
                <Text style={styles.statValue}>1,875</Text>
                <Text style={styles.statLabel}>Calories Burned</Text>
                <Text style={styles.statTarget}>Goal: 2,500</Text>
              </View>
            </View>

          </View>

          {/* Water Intake Row */}
          <View style={styles.waterSection}>
            <Text style={styles.sectionTitle}>Water Intake 💧</Text>
            <View style={styles.waterCard}>
              <Progress.Circle
                size={100}
                thickness={10}
                progress={waterProgress}
                showsText={true}
                color={'#2196F3'}
                borderWidth={0}
                textStyle={styles.waterProgressText}
                formatText={(progress) => `${Math.round(progress * 100)}%`}
              />
              <View style={styles.waterInfo}>
                <Text style={styles.waterValue}>1.6L / 4L</Text>
                <Text style={styles.waterMessage}>Drink more water to stay hydrated!</Text>
              </View>
            </View>
          </View>

          {/* Activity Summary */}
          <View style={styles.summarySection}>
            <Text style={styles.sectionTitle}>Today's Activity 📊</Text>

            <View style={styles.summaryCard}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Distance</Text>
                <Text style={styles.summaryValue}>4.2 km</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Active Time</Text>
                <Text style={styles.summaryValue}>45 mins</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Floors</Text>
                <Text style={styles.summaryValue}>8</Text>
              </View>
            </View>
          </View>

          {/* Motivational Quote */}
          <View style={styles.quoteSection}>
            <Text style={styles.quoteText}>
              "The only bad workout is the one that didn't happen."
            </Text>
            <Text style={styles.quoteAuthor}>- Anonymous</Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
  },

  // Stats Cards
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 20,
  },
  statCard: {

    flex: 1,
    backgroundColor: '#77ff00',  // #352929
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  centerContent: {
    alignItems: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statInfo: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  statTarget: {
    fontSize: 10,
    color: '#999',
    marginTop: 4,
  },

  // Water Section
  waterSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  waterCard: {
    backgroundColor: '#77ff00',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  waterProgressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  waterInfo: {
    flex: 1,
  },
  waterValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  waterMessage: {
    fontSize: 12,
    color: '#666',
  },

  // Summary Section
  summarySection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  summaryCard: {
    backgroundColor: '#77ff00',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#e0e0e0',
  },

  // Quote Section
  quoteSection: {
    marginTop: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#e8f8f1',
    borderRadius: 20,
    marginHorizontal: 16,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1a1a2e',
    textAlign: 'center',
    lineHeight: 24,
  },
  quoteAuthor: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
})
