import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
          <View style={[styles.card,styles.cardOne]}>
             <Text>Red</Text>
          </View>
          <View style={[styles.card,styles.cardTwo]}>
             <Text>green</Text>
          </View>
          <View style={[styles.card,styles.cardThree]}>
             <Text>blue</Text>
          </View>
         
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
      headingText:{
          fontWeight:'bold',
          fontSize:24,
          color:'white',
          paddingHorizontal:8
      },
      container:{
         flex:1,
         flexDirection:'row',
         padding:8,
      },
      card:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         height:100,
         width:100,
         borderRadius:8,
         margin:8,
      },
      cardOne:{
        backgroundColor:'#EF5354'
      },
      cardTwo:{
        backgroundColor:'#50DBB4'
      },
      cardThree:{
        backgroundColor:'#5DA3FA'
      }
});
export default FlatCards