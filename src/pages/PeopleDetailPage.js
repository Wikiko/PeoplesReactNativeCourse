import React from 'react';
import { View, Image, StyleSheet, ScrollView, Button } from 'react-native';
import Line from '../components/Line';
import { capitalizeFirstLetter } from '../util';

export default class PeoplePage extends React.Component {
    static navigationOptions({ navigation }) {
        const peopleName = capitalizeFirstLetter(
            navigation.state.params.people.name.first
        );
        return {
            headerTitle: peopleName
        };
    }

    render() {

        const { people } = this.props.navigation.state.params;

        return (
            <ScrollView>
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
                        <Line label="Nacionalidade:" content={people.nat} />
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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