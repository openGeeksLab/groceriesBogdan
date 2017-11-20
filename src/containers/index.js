import { StackNavigator } from 'react-navigation';
import Lists from '../screens/lists/Lists';
import AddNewList from '../screens/lists/AddNewList';

const AppContainer = StackNavigator({
  Lists: { screen: Lists },
  NewList: {screen: AddNewList },
});

export default AppContainer;
