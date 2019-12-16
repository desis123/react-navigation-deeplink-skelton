import React , {Component} from 'react';
import { Text , StyleSheet , View } from 'react-native';




 class Home extends Component {

    static NavigationOptions = {
        title : "Home"
    };
    
    render() {
        return (
            <View style={styles.circle}>
            <Text style={styles.text}>This is a Home Text</Text>
        </View>
        )
    }
}



const styles = StyleSheet.create({
    circle: {
        padding: 8,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        height: 35,
        marginBottom: 10,
        alignItems: 'center'
    },
    text: {
        fontFamily: "CircularStd-Book",
        fontSize: 14,
        color: '#2f354b',
        textAlign: 'center'
    }
});



export default Home;