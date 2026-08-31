import { View, Text, Image, StyleSheet } from 'react-native'


const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlR58tOc9RVxAmh3rzouOpnNS6otaExVw-26kkWDuFdeXjCOhfKqWboT3XYhRDRosfAyEfDefwSoaDms8z3QlOsluoCV4BLO9uMPdrqZcnxVEJHYLXS1Fdo2m9A1uAF_yGCBAiu5A=s1360-w1360-h1020-rw'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                        red and pink sandstone, it is on the edge of the City Palace.</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'#e9ecf1'
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 10,
        marginVertical: 11,
        marginHorizontal: 6

    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }

})
export default FancyCard