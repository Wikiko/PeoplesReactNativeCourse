import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PeopleList = ({ peoples, ...props }) => {
    const textElements = peoples.map(people => {
        const { first } = people.name;
        return (
            <View key={first} style={styles.line}>
                <Text style={styles.lineText}>{first}</Text>
            </View>
        );
    });

    return (
        <View style={styles.container}>
            {textElements}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff8e1'
    },
    line: {
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
});

export default PeopleList;