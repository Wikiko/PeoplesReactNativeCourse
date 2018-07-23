import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import Error from '../components/Error';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false
    };
  }

  renderPage() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#ff8a23" />
    }
    if (this.state.error) {
      return <Error />;
    }
    return (
      <PeopleList
        peoples={this.state.peoples}
        onPressItem={(pageParams) => this.props.navigation.navigate('PeopleDetail', pageParams)} />
    );
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://randomuser.me/api/?nat=br&results=30')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
          loading: false,
          error: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true
        });
      });
  }

  renderList() {
    const textElements = this.state.peoples.map((people) => {
      const { first } = people.name;

      return <Text key={first}>{first}</Text>
    });

    return textElements;
  }

  render() {
    return (
      <View style={styles.container}>
        {/* {
          this.state.loading
            ? <ActivityIndicator size="large" color="#ff8a23" />
            : this.state.error
              ? 
              : <PeopleList
                peoples={this.state.peoples}
                onPressItem={(pageParams) => this.props.navigation.navigate('PeopleDetail', pageParams)} />
        } */}
        {this.renderPage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
});