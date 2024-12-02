import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import Header from '../components/Header';
import ProfileDetails from '../components/ProfileDetails';
import TabNavigation from '../components/TabNavigation';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfilePicture
          profileSource={require('../styles/srp.jpg')}
          backgroundSource={require('../styles/bck.jpg')}
        />
        <Header name="Sabda Raul Prima" />
        <ProfileDetails friends="4,6 rb" followers="873" />
      </ScrollView>
      <TabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
});

export default ProfileScreen;
