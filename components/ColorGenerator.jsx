import {
    View, Text,
    StatusBar, StyleSheet, TouchableOpacity,
    
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
const ColorGenerator = () => {
    const [randomBackground, setRandomBackground] = useState("#ebece3");
    const [circleColor, setCircleColor] = useState("#ffffff");
    const [triangleColor, setTriangleColor] = useState("#ffffff");
    const [squareColor, setSquareColor] = useState("#ffffff");
    const generateColor = () => {
        const hexRange = "0123456789ABCDEF"
        let color = "#"
        let color1 = "#"
        let color2 = "#"
        let color3 = "#"
        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)]
            color1 += hexRange[Math.floor(Math.random() * 16)]
            color2 += hexRange[Math.floor(Math.random() * 16)]
            color3 += hexRange[Math.floor(Math.random() * 16)]
        }
        setRandomBackground(color)
        setCircleColor(color1)
        setTriangleColor(color2)
        setSquareColor(color3)
    }

    return (
        <>
        <SafeAreaView 
          style={[{ flex: 1, backgroundColor: randomBackground },styles.container]}
        >
            <StatusBar backgroundColor={randomBackground} />
            <View style={[styles.container, { backgroundColor: randomBackground }]}>
                <View style={[styles.shape, { backgroundColor: squareColor }, styles.Square]}>
                    <Text style={{ color: "black" }}>
                        Square
                    </Text>
                </View>
                <View style={[styles.shape, { backgroundColor: circleColor }, styles.Circle]}>
                    <Text style={{ color: "black" }}>
                        Circle
                    </Text>
                </View>
                <View style={styles.triangleWrapper}>
                    <View style={[styles.Triangle, { borderBottomColor: triangleColor }]} />
                    <Text style={styles.triangleText}>Triangle</Text>
                </View>
                <TouchableOpacity onPress={generateColor}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnTxt}>Press me</Text>
                    </View>
                </TouchableOpacity>

            </View>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height:'100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    shape: {
        width: 100,
        height: 100,
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    Square: {
        borderRadius: 0,
    },
    Circle: {
        borderRadius: 50,
    },
    triangleWrapper: {
        width: 120,
        height: 120,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    Triangle: {
        position: "absolute",
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 70,
        borderRightWidth: 70,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
    },
    triangleText: {
        color: "black",
        textAlign: "center",
        marginTop: 20,
        zIndex: 1,
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: "#6A1B4D",
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    actionBtnTxt: {
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
    }
});
export default ColorGenerator
