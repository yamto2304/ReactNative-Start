import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

import StopWatch from '../assets/stopwatch.png';
import Whale from '../assets/whale.png';

export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Home Run'
    };

    constructor(props) {
        super(props);
        this.title = '???';
        this.state = {
            categories: [
                { id: 1, name: 'Đồng hồ', image: StopWatch },
                { id: 2, name: 'Cá Voi', image: Whale },
                // { id: 3, name: 'Item 3', image: StopWatch },
            ]
        };
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <FlatList
                data={categories}
                renderItem={({ item }) =>
                    <CategoryListItem
                        category={item}
                        onPress={
                            () => navigation.navigate(
                                'Category',
                                { id: item.id, title: item.name, image: item.image }
                            )
                        }
                    />
                }
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingTop: 32, }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 32,
        paddingRight: 16,
        paddingLeft: 16,
    },
});
