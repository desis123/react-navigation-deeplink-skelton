/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home';
import Article from './src/Article';

const AppNavigator = createStackNavigator(
  {
  
    Article: {
     screen: Article,
     path: 'article/:id',
    },
  
    Home : {
      screen : Home
    }

  } ,
  {
    initialRouteName: 'Home'

  }

);

const AppContainer = createAppContainer(AppNavigator);



const prefix = 'myapp://';

const MainApp = () => <AppContainer uriPrefix={prefix} />;
export default MainApp;



