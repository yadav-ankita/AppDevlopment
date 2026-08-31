import React,{useState} from 'react'
import {
    View, Text, StyleSheet,
    Button
} from 'react-native'
const Cat = ({catName}) => {
  const [hungry, setHungry] = useState(true);

  return (
     <View>
          <Text>Hello I am {catName}</Text>
          <Text>I am {hungry ? "hungry" : "full"}</Text>
          <Button
              onPress={() => {
                  setHungry(!hungry);
              }}
              title={hungry ? "Pour me some milk, please!" : "Thank you!"}
          />
     </View>
  )
}

export default Cat
