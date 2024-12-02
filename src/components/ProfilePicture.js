import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ProfilePicture = ({ profileSource, backgroundSource }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={backgroundSource} style={styles.backgroundImage} />
      
      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <Image source={profileSource} style={styles.profileImage} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.storyButton}>
          <Text style={styles.buttonText}>+ Tambahkan ke cerita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  profileContainer: {
    marginTop: 130, // Adjust to align the profile picture over the background
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#0078FF', // Blue border
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  storyButton: {
    backgroundColor: '#0078FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#0078FF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProfilePicture;
