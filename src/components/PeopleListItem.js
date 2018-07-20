import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from '../util';

const PeopleListItem = ({ people, navigateToPeopleDetail, ...props }) => {
    const { title, first, last } = people.name;
    return (
        <TouchableOpacity onPress={navigateToPeopleDetail}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={styles.lineText}>
                    {`${
                        capitalizeFirstLetter(title)
                        } ${
                        capitalizeFirstLetter(first)
                        } ${
                        capitalizeFirstLetter(last)
                        }`}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
});

export default PeopleListItem;