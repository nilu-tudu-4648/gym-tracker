import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { useForm, Controller } from 'react-hook-form'; // Uncomment when installed
import { useAppTheme } from '@/hooks/useAppTheme';
import * as ImagePicker from 'expo-image-picker';

export default function CreateUser() {
  // const { control, handleSubmit, setValue, watch } = useForm(); // Uncomment when installed
  // const profilePic = watch('profilePic');
  const [profilePic, setProfilePic] = React.useState<string|null>(null);
  const { colors } = useAppTheme();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
      // setValue('profilePic', result.assets[0].uri); // Uncomment when using react-hook-form
    }
  };

  const onSubmit = (data: any) => {
    // Handle form submission
    console.log('Form Data:', data);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Create User</Text>
      
      {/* Profile Picture Upload */}
      <View style={styles.imagePickerContainer}>
        <Text style={[styles.label, { color: colors.label }]}>Profile Picture</Text>
        <TouchableOpacity 
          style={[styles.imagePicker, { 
            borderColor: colors.icon, 
            backgroundColor: colors.cardBackground 
          }]} 
          onPress={pickImage}
        >
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
          ) : (
            <Text style={[styles.imagePickerText, { color: colors.description }]}>Upload Photo</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Name Input */}
      <Text style={[styles.label, { color: colors.label }]}>Name</Text>
      <TextInput 
        style={[styles.input, { 
          borderColor: colors.icon, 
          color: colors.text,
          backgroundColor: colors.cardBackground 
        }]} 
        placeholder="Enter full name" 
        placeholderTextColor={colors.description}
      />
      {/* Email Input */}
      <Text style={[styles.label, { color: colors.label }]}>Email</Text>
      <TextInput 
        style={[styles.input, { 
          borderColor: colors.icon, 
          color: colors.text,
          backgroundColor: colors.cardBackground 
        }]} 
        placeholder="Enter email address" 
        keyboardType="email-address" 
        placeholderTextColor={colors.description}
      />
      {/* Phone Input */}
      <Text style={[styles.label, { color: colors.label }]}>Phone</Text>
      <TextInput 
        style={[styles.input, { 
          borderColor: colors.icon, 
          color: colors.text,
          backgroundColor: colors.cardBackground 
        }]} 
        placeholder="Enter phone number" 
        keyboardType="phone-pad" 
        placeholderTextColor={colors.description}
      />
      {/* Address Input */}
      <Text style={[styles.label, { color: colors.label }]}>Address</Text>
      <TextInput 
        style={[styles.input, { 
          borderColor: colors.icon, 
          color: colors.text,
          backgroundColor: colors.cardBackground 
        }]} 
        placeholder="Enter address" 
        placeholderTextColor={colors.description}
      />
      
      {/* Submit Button */}
      <Button title="Create User" onPress={() => onSubmit({})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  imagePickerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 60,
    marginTop: 8,
  },
  imagePickerText: {
    fontSize: 14,
    textAlign: 'center',
    // color will be set dynamically
  },
  profilePic: {
    width: 116,
    height: 116,
    borderRadius: 58,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
}); 