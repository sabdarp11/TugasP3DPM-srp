import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileDetails = ({ friends, followers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{friends} teman</Text>
      <Text style={styles.text}>{followers} pengikut</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ProfileDetails;
