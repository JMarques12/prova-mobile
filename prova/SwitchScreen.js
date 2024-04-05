import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';

export default function SwitchScreen() {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle Image" onPress={toggleImage} />
      {showImage && <Image source={require('./assets/banco.jpg')} style={{ width: 200, height: 200 }} />}
    </View>
  );
}