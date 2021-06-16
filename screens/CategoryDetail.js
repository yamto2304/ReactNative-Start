import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

var test = "Default";
export default class CategoryDetail extends React.Component {
    static navigationOptions = {
        title: 'title',
        name: 'hi'
    }


    // click = () => {
    //     alert('Hello');
    // }

    render() {
        const { route } = this.props;

        return (
            <View style={styles.container}
            // title={route.params.title}
            >
                <Image style={styles.categoryImage} source={route.params.image} />
                <Text style={styles.title}>{route.params.title} {route.params.id} {test}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        // textAlign:'center',
        paddingTop: 32,
        paddingRight: 16,
        paddingLeft: 16,
        // alignContent:'center'
    },
    categoryImage: {
        marginBottom: 32,
        paddingTop: 32,
        width: 64,
        height: 64,
        alignSelf: 'center',
    },
    title: {
        // textTransform: 'uppercase',
        color: '#ff0000',
        marginBottom: 8,
        fontWeight: '700',
        elevation: 1,
        textAlign: 'center',

    },
});
