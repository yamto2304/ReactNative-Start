import React from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native'

import Whale from '../assets/whale.png';

export default function CategoryListItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{props.title} </Text>
            <Image style={styles.categoryImage} source={Whale} />
            <Image style={styles.categoryImage} source={props.StopWatch} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        // borderWidth: 1,
        borderColor: '#000000',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: { width : 0, height : 0},
        elevation: 6,
        marginBottom: 16,
    },
    categoryImage: {
        width: 64,
        height: 64,
    },
    title: {
        // textTransform: 'uppercase',
        color: '#ff0000',
        marginBottom: 8,
        fontWeight: '700'
    },
    
});