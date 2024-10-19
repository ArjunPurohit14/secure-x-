import React from 'react';
import { Button, Alert } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

const GoogleSignInButton = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '1093051703190-5r9uqqfs6bdbu09nscrmf9dvbl61o617.apps.googleusercontent.com', // Replace with your actual Client ID
    redirectUri: 'https://auth.expo.io/@nextdev02', // Replace with your actual redirect URI
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      Alert.alert('Success', `ID Token: ${id_token}`);
      // Here you can handle the token (e.g., send it to your backend or Firebase)
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Sign in with Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

export default GoogleSignInButton;
