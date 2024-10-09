import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { StyleSheet } from "react-nativescript";

type LoginScreenProps = {
    route: RouteProp<MainStackParamList, "Login">,
    navigation: FrameNavigationProp<MainStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        // TODO: Implement actual login logic
        console.log("Login attempt with:", username, password);
        // For now, navigate to BuyerDashboard as an example
        navigation.navigate("BuyerDashboard");
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Construction Material Delivery
            </label>
            <textField
                hint="Username"
                text={username}
                onTextChange={(e) => setUsername(e.value)}
                style={styles.input}
            />
            <textField
                hint="Password"
                text={password}
                onTextChange={(e) => setPassword(e.value)}
                secure={true}
                style={styles.input}
            />
            <button onTap={handleLogin} style={styles.button}>
                Login
            </button>
            <button onTap={() => navigation.navigate("Register")} style={styles.button}>
                Register
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    input: {
        width: "80%",
        margin: 10,
        padding: 10,
        fontSize: 18,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    button: {
        fontSize: 18,
        color: "white",
        backgroundColor: "#2e6ddf",
        padding: 10,
        margin: 10,
        width: "80%",
        textAlignment: "center",
        borderRadius: 5,
    },
});