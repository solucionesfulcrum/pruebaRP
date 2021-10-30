import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

const AuthProvider = () => {
  

  return (
    <AuthContext.Provider
      value={{
        googleLogin: async () => {
          try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential)
          } catch(error) {
            console.log({error});
          }
        },
      }}>
    </AuthContext.Provider>
  );
};

export default AuthProvider;