import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ProductListItem from '../components/ProductListItem'

import Whale2 from '../assets/whale2.png';
import StopWatch from 'C:/Users/Tuani/MyBlankRnApp/assets/stopwatch.png';

import { FlatList } from 'react-native-gesture-handler';


export default class CategoryDetail extends React.Component {
    static navigationOptions = {
        title: 'title',
        name: 'hi'
    }

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    image: Whale2,
                    name: 'Big Whale',
                    price: '99999'
                },
                {
                    id: 2,
                    image: StopWatch,
                    name: 'Green Stop Watch',
                    price: '12345'
                }
            ]
        }
    }

    render() {
        // const { route } = this.props;
        const { navigation } = this.props;
        const { products } = this.state;
        return (
            <FlatList
                data={this.state.products}
                contentContainerStyle={styles.container}
                numColumns={2}
                renderItem={({ item }) =>
                    <View style={styles.wrapper}>
                        <ProductListItem product={item} />
                    </View>
                }
                keyExtractor={(item) => `${item.id}`}
            >
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    categoryImage: {
        // marginBottom: 32,
        // paddingTop: 32,
        width: 64,
        height: 64,
        alignSelf: 'center',
    },
    title: {
        // textTransform: 'uppercase',
        color: '#ff0000',
        // marginBottom: 8,
        fontWeight: '700',
        elevation: 1,
        textAlign: 'center',

    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});
