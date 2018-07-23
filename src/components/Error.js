import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Error = (props) => (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: 'https://media.treasy.com.br/media/2014/07/erros-cometidos-no-or%C3%A7amento-empresarial-01.jpg'}}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    image: {
        aspectRatio: 1,
        borderRadius: 50
    }
});

export default Error;