import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Modalize } from "react-native-modalize";

import HomeView from "./src/views/Home";
import NewAdd from "./src/views/NewAdd";
import Settings from "./src/views/Settings";

import { TabBar } from "./src/navigation/TabBar";
import { Box, Text } from "./src/components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const newAddModal = useRef(Modalize);

  const openNewAddModal = () => {
    newAddModal.current?.open();
  };

  //  backgroundColor={theme.colors.black}
  return (
    <NavigationContainer>
      <StatusBar animated={true} barStyle="dark-content" />

      <Tab.Navigator
        tabBar={(props) => <TabBar newAddModal={openNewAddModal} {...props} />}
      >
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>

      <Modalize ref={newAddModal}>
        <NewAdd />
      </Modalize>
    </NavigationContainer>
  );
}

//   <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="Home" component={HomeView} />
//       </Stack.Navigator>
