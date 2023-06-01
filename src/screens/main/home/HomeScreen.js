import React from "react";
import { View, Text } from "react-native";
import MainLayout from "../../../layouts/MainLayout";

const HomeScreen = (props) => {
    return (
        <MainLayout avoid={true}>
            <Text>Home Screen</Text>
        </MainLayout>
    )
};

export default HomeScreen;