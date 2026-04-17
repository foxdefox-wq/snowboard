import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
// add this but with ghp 
//_OyNyMwt
//ef
//yzI4QL7hi
//wkiHh
//FGtuL
//920c
//jOwS

export default function MyScreen() {
  const [editable, setEditable] = useState(true);
  const [text, setText] = useState('');

  return (
    <View>
      <Text style={{}}>{text}</Text>

      <TextInput
        style={{
          borderRadius: 10,
          borderColor: 'red',
          borderWidth: 1,
          padding: 8,
        }}
        editable={editable}
        onEndEditing={(e) => {
          const t = e.nativeEvent.text;

          setEditable(false); // lock input while animating

          const recurse = (i: number) => {
            setText(t.substring(0, i));

            if (i < t.length) {
              setTimeout(() => recurse(i + 1), 30);
            } else {
              setEditable(true); // unlock when done
            }
          };

          recurse(0); // <-- YOU FORGOT THIS
        }}
      />
    </View>
  );
}
