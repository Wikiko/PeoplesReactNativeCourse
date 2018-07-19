import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({ peoples, ...props }) => {
    // const textElements = peoples.map(people => {
    //     const { first } = people.name;
    //     return (
    //         <View key={first} style={styles.line}>
    //             <Text style={styles.lineText}>{first}</Text>
    //         </View>
    //     );
    // });

    const items = peoples.map(people => (
        <PeopleListItem
            key={people.name.first}
            style={styles.line}
            people={people} />
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