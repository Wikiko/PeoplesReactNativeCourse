import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({ peoples, onPressItem, ...props }) => {

    const items = peoples.map(people => (
        <PeopleListItem
            key={people.name.first}
            style={styles.line}
            people={people}
            navigateToPeopleDetail={onPressItem} />
    ));

    return (
        <View style={styles.container}>
            {items}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff8e1'
    },
});

export default PeopleList;