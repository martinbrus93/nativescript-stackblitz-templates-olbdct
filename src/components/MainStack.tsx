import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";
import { BuyerDashboard } from "./BuyerDashboard";
import { DriverDashboard } from "./DriverDashboard";
import { SupplierDashboard } from "./SupplierDashboard";
import { MaterialSearch } from "./MaterialSearch";
import { OrderTracking } from "./OrderTracking";
import { InventoryManagement } from "./InventoryManagement";
import { PaymentScreen } from "./PaymentScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen name="Login" component={LoginScreen} />
            <StackNavigator.Screen name="Register" component={RegisterScreen} />
            <StackNavigator.Screen name="BuyerDashboard" component={BuyerDashboard} />
            <StackNavigator.Screen name="DriverDashboard" component={DriverDashboard} />
            <StackNavigator.Screen name="SupplierDashboard" component={SupplierDashboard} />
            <StackNavigator.Screen name="MaterialSearch" component={MaterialSearch} />
            <StackNavigator.Screen name="OrderTracking" component={OrderTracking} />
            <StackNavigator.Screen name="InventoryManagement" component={InventoryManagement} />
            <StackNavigator.Screen name="Payment" component={PaymentScreen} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);