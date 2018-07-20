import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
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
      <View>
        {/* {this.renderList()} */}
        <PeopleList
          peoples={this.state.peoples}
          onPressItem={() => this.props.navigation.navigate('PeopleDetail')} />
      </View>
    );
  }
}