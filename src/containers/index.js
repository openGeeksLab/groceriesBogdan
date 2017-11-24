import { StackNavigator } from 'react-navigation';
import ListsContainer from './ListsContainer';
import AddNewListContainer from './AddNewListContainer';
import EditListsContainer from './EditListsContainer';
import ProductsListContainer from './ProductsListContainer';
import Settings from '../screens/Settings';

const AppContainer = StackNavigator({
  Lists: { screen: ListsContainer },
  Settings: { screen: Settings },
  EditLists: { screen: EditListsContainer },
  NewList: { screen: AddNewListContainer },
  ProductsList: { screen: ProductsListContainer }
});

export default AppContainer;
