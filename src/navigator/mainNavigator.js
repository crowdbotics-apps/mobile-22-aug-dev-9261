import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen610187Navigator from '../features/BlankScreen610187/navigator';
import BlankScreen510186Navigator from '../features/BlankScreen510186/navigator';
import BlankScreen010180Navigator from '../features/BlankScreen010180/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen610187: { screen: BlankScreen610187Navigator },
BlankScreen510186: { screen: BlankScreen510186Navigator },
BlankScreen010180: { screen: BlankScreen010180Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
