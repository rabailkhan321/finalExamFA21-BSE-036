// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Image, TouchableOpacity } from 'react-native';

// export default function IntroScreen2({ onNext }: { onNext: () => void }) {
//   return (
//     <View style={styles.container}>
//           {/* Image on top */}
//           <Image
//             source={{ uri: "data:image/jpeg;base64,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" }}
//             style={styles.image}
//             resizeMode="contain"  // Apply resizeMode separately
//           />
    
//           {/* Heading */}
//           <Text style={styles.heading}>Explore Your Dream Laptop</Text>
    
//           {/* Subheading */}
//           <Text style={styles.subheading}>Discover the latest laptops that fit your style and needs</Text>
    
//           {/* Descriptive Text */}
//           <Text style={styles.description}>
//           - Browse through our curated collection of laptops 
//           from top brands, featuring the latest technology and 
//           innovative designs.
 
    
//     </Text>
    
//           {/* Next Button */}
//           <TouchableOpacity style={styles.button} onPress={onNext}>
//             <Text style={styles.buttonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 20,
//       backgroundColor: '#f9f9f9', // Light background color
//     },
//     image: {
//       width: '100%',  // Full width
//       height: 250,    // Fixed height, adjust based on your image
//       marginBottom: 30,  // Space between the image and text
//     },
//     heading: {
//       fontSize: 32,
//       fontWeight: 'bold',
//       color: '#333',  // Dark color for contrast
//       textAlign: 'center',
//       marginBottom: 10,  // Space between heading and subheading
//     },
//     subheading: {
//       fontSize: 20,
//       color: '#777', // Lighter color for subheading
//       textAlign: 'center',
//       marginBottom: 20,  // Space between subheading and description
//     },
//     description: {
//       fontSize: 16,
//       color: '#555',
//       textAlign: 'center',
//       marginBottom: 40, // Space between description and button
//       lineHeight: 22,  // Better readability for text
//     },
//     button: {
//       backgroundColor: '#FF69B4',  // Pink color for the button (HotPink)
//       paddingVertical: 12,
//       paddingHorizontal: 40,
//       borderRadius: 25,  // Rounded corners
//       alignItems: 'center',
//     },
//     buttonText: {
//       color: '#fff',  // White text color
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
//   });
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export default function LoginScreen({ onNext }: { onNext: () => void }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login functionality - navigate to IntroScreen3
    onNext();
  };

  return (
    <View style={styles.container}>
      {/* Image on top */}
      <Image
            source={{uri:"data:image/jpeg;base64,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"}}
            style={styles.image}
            resizeMode="contain"  // Apply resizeMode separately
          />

      {/* Title */}
      <Text style={styles.title}>Become our member</Text>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="username"
        placeholderTextColor="#000000"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffebf0', // Light pink background
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff66b2', // Pink color for title
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ff66b2', // Pink border color
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333', // Dark text color for input
  },
  button: {
    backgroundColor: '#ff66b2', // Pink button
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
