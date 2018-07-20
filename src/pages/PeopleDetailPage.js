import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/Line';

export default class PeoplePage extends React.Component {

    render() {

        const { people } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: people.picture.large }} />
                <View style={styles.detailContainer}>
                    <Line label="E-mail:" content={people.email} />
                    <Line label="Cidade:" content={people.location.city} />
                    <Line label="Estado:" content={people.location.state} />
                    <Line label="Tel:" content={people.phone} />
                    <Line label="Cel:" content={people.cell} />
                    <Line label="Nat:" content={people.nat} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1,
    },
    detailContainer: {
        backgroundColor: '#fff3e0',
        marginTop: 20,
        elevation: 1
    }
});