import { StackNavigator } from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

// +- como fica na versão 2.0 do react-navigation
// lembrando que apartir do 2.0 não é possível colocar customizar o posicionamento
// do title.
// export default createStackNavigator({
//   Main: {
//     screen: PeoplePage,
//     navigationOptions: {
//       title: 'Pessoas!',
//       headerStyle: {
//         backgroundColor: '#ff8a23',
//         borderBottomWidth: 1,
//         borderBottomColor: '#C5C5C5',
//       },
//       headerTitleStyle: {
//         fontSize: 30,
//         color: '#fff',
//         alignSelf: 'center'
//       }
//     }
//   }
// });
// Mostrado no curso porem depreciado!
export default StackNavigator({
  Main: {
    screen: PeoplePage
  },
  PeopleDetail: {
    screen: PeopleDetailPage
  }
}, {
    navigationOptions: {
      title: 'Pessoas!',
      headerStyle: {
        backgroundColor: '#ff8a23',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center'
      }
    }
  });