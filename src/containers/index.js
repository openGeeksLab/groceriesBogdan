import { StackNavigator } from 'react-navigation';
import ListsContainer from './ListsContainer';
import AddNewListContainer from './AddNewListContainer';
import EditListsContainer from './EditListsContainer';
import ProductsList from '../screens/products/ProductsList';
import Settings from '../screens/Settings';
// useless line

const AppContainer = StackNavigator({
  Lists: { screen: ListsContainer },
  Settings: {screen: Settings}, // where is spaces??
  EditLists: {screen: EditListsContainer},
  NewList: {screen: AddNewListContainer },
  ProductsList: {screen: ProductsList}
});

export default AppContainer;
