import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({ peoples, onPressItem, ...props }) => {
    return (
        <FlatList
            style={styles.container}
            data={peoples}
            keyExtractor={(item) => item.name.title + item.name.first + item.name.last}
            renderItem={({ item }) => (
                <PeopleListItem
                    people={item}
                    navigateToPeopleDetail={onPressItem} />
            )} />
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff8e1'
    },
});

export default PeopleList;