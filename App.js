import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  Button,
  Text, 
  View, 
  SafeAreaView, 
  TextInput
} from 'react-native';
import global from './styles/global';

import PhoneTranslator from './helpers/PhoneTranslator';

export default function App() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={global.container}>
      <StatusBar style="auto" />
      <TextInput
        style={global.input}
        placeholder="Type here your text to convert it to number"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button
        title="Convert to number"
        onPress={() => alert(PhoneTranslator(text))}
      />
    </SafeAreaView>
  );
}