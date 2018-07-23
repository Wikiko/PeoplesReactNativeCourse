import { StackNavigator, createStackNavigator } from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

// +- como fica na versão 2.9.0 do react-navigation
// lembrando que apartir do 2.9.0 não é possível colocar customizar o posicionamento
// do title.
export default createStackNavigator(
  {
    Main: PeoplePage,
    PeopleDetail: PeopleDetailPage
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#ff8a23',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white'
      }
    }
  }
);
// Mostrado no curso porem depreciado! - react-navigation 1.0.3
// export default StackNavigator({
//   Main: PeoplePage,
//   PeopleDetail: PeopleDetailPage
// }, {
//     navigationOptions: {
//       headerTintColor: 'white',
//       headerStyle: {
//         backgroundColor: '#ff8a23',
//         borderBottomWidth: 1,
//         borderBottomColor: '#C5C5C5'
//       },
//       headerTitleStyle: {
//         fontSize: 30,
//         color: 'white',
//         alignSelf: 'center'
//       }
//     }
//   });