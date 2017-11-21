import { StackNavigator } from 'react-navigation';
import Lists from '../screens/lists/Lists';
import AddNewList from '../screens/lists/AddNewList';
import EditLists from '../screens/lists/EditLists';
import ProductsList from '../screens/products/ProductsList';
import Settings from '../screens/Settings';


const AppContainer = StackNavigator({
  Lists: { screen: Lists },
  Settings: {screen: Settings},
  EditLists: {screen: EditLists},
  NewList: {screen: AddNewList },
  ProductsList: {screen: ProductsList}
});

export default AppContainer;
