import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabNavigation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tab}>Beranda</Text>
      <Text style={styles.tab}>Video</Text>
      <Text style={styles.tab}>Marketplace</Text>
      <Text style={styles.tab}>Notifikasi</Text>
      <Text style={styles.tab}>Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  tab: {
    color: '#fff',
    fontSize: 14,
  },
});

export default TabNavigation;
