import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ComicCard() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.box, styles.gOne]}>Gifts</Text>
                <Text style={[styles.box, styles.mTwo]}>Messages</Text>
                <Text style={[styles.box, styles.aThree]}>Activity</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={[styles.card]}>
                    <View>
                        <Image
                            source={
                                {
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wOg1SLtsWZAnulb8qEi3yA2Q8eYePzsMS8WIH1klzSeBGM_8V_ohakj7&s=10'
                                }
                            }
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.rightSide}>
                        <Text style={styles.label} >Community Connect</Text>
                        <Text style={styles.title}>Fantasy Comics Showcase</Text>
                        <Text style={styles.date}>Jan 1,2025</Text>
                    </View>
                </View>
                <View style={[styles.card]}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHz4gYAiz3Zn4HRIhHRQS-A1jVUHfbFg0dYaVLDQUWPw&s=10'
                        }}
                        style={styles.cardImg}
                    />
                    <View style={styles.rightSide}>
                        <Text style={styles.label}>New Release Event</Text>
                        <Text style={styles.title}>Hero Party Reincarnated</Text>
                        <Text style={styles.date}>Jan 1,2025</Text>
                    </View>
                </View>
                 <View style={[styles.card]}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1WP7nk8Ha7lGArMEq-fV40A_oanni4AdfooiaIKP0g&s=10'
                        }}
                        style={styles.cardImg}
                    />
                    <View style={styles.rightSide}>
                        <Text style={styles.label}>New Release Event</Text>
                        <Text style={styles.title}>Prolouge Promise</Text>
                        <Text style={styles.date}>Jan 1,2025</Text>
                    </View>
                </View>
                 <View style={[styles.card]}>
                    <Image
                        source={{
                            uri: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/05/birthright-image-300x461.jpg'
                        }}
                        style={styles.cardImg}
                    />
                    <View style={styles.rightSide}>
                        <Text style={styles.label}>New Release Event</Text>
                        <Text style={styles.title}>Fantasy Comics Awaits</Text>
                        <Text style={styles.date}>Jan 1,2025</Text>
                    </View>
                </View>
                 <View style={[styles.card]}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvG8fr6XynZjB5NI8fxIXMP0gMiY8EJaeKmt8ADTPGHg&s=10'
                        }}
                        style={styles.cardImg}
                    />
                    <View style={styles.rightSide}>
                        <Text style={styles.label}>New Release Event</Text>
                        <Text style={styles.title}>Whale Meets Penguin</Text>
                        <Text style={styles.date}>Jan 1,2025</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop:5
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop:12
    },
    box: {
        color: '#9996969c',
        fontWeight: 'bold',
        fontSize: 15,
        height: 45,
        backgroundColor: '#000000',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 20,
        borderColor:'#e3e3e3',
        borderStyle:'solid',
        borderWidth:1     
    },
    gOne: {
        backgroundColor: '#ffffff'
    },
    mTwo: {
        backgroundColor: "#f1b724",
        color: '#000000'

    },
    aThree: {
        backgroundColor: '#ffffff'
    },
    cardImg: {
        height: 100,
        width: 100,
        borderRadius: 6,
        margin:9
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,   
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderWidth: 2,
        borderRadius: 6,
        borderColor:'#d8d7d7',
        borderStyle:'solid'
    },
    rightSide: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginVertical: 10,
        marginHorizontal:10,
        justifyContent:'space-around'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000000'
    },
    label: {
        color: '#9ea0a5',
        fontWeight:'bold'
    },
    date: {
        borderRadius: 10,
        backgroundColor: '#EAECF0',
        width:100,
        padding:4,
        textAlign:'center'
    }
})
