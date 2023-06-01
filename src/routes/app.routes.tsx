import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Home from "../screens/home";
import Historic from "../screens/historic";
import AddSpendOrProfit from "../screens/addSpendOrProfit";

import { Ionicons } from "@expo/vector-icons";

export function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#345AF8",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 20,
          left: 20,
          right: 20,
          bottom: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused === true) {
              return <Ionicons name="home" size={26} color={color} />;
            } else {
              return <Ionicons name="home-outline" size={26} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="AddSpendOrProfit"
        component={AddSpendOrProfit}
        options={{
          headerTitle: "Adicionar transações",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerTitleStyle: {
            fontFamily: "Lexend_700Bold",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused === true) {
              return (
                <Ionicons name="add-circle-sharp" size={30} color={color} />
              );
            } else {
              return (
                <Ionicons name="add-circle-outline" size={30} color={color} />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Historic"
        component={Historic}
        options={{
          headerTitle: "Suas transações",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerTitleStyle: {
            fontFamily: "Lexend_700Bold",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused === true) {
              return <Ionicons name="reader" size={26} color={color} />;
            } else {
              return <Ionicons name="reader-outline" size={26} color={color} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
