import React from "react";
import {
	Image,
	TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";

//Screens
import { Home } from "./screens";

import {icons, COLORS, FONTS, SIZES} from './constants';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator 
				initialRouteName={'Home'}
			>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: 'ITEM SELECTOR',
						headerTintColor: COLORS.lightBlue,
						headerTitleStyle: {
							...FONTS.navTitle
						}
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default () => {
	return <App />;
};