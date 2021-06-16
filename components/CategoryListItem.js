import React from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import 'react-native-gesture-handler';

// import Whale from '../assets/whale.png';

export default function CategoryListItem(props) {
    const { category, onPress } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={styles.container1}>
                <Text style={styles.title} >{category.name} </Text>
                <Image style={styles.categoryImage} source={category.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container1: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000000',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    categoryImage: {
        width: 64,
        height: 64,
    },
    title: {
        // textTransform: 'uppercase',
        color: '#ff0000',
        marginBottom: 8,
        fontWeight: '700',
        elevation: 1,

    },

});