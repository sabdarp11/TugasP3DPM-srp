import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  editButton: {
    marginTop: 5,
    backgroundColor: '#0078FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
