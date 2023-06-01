import { StyleSheet } from "react-native";
import ColorInfo from "./ColorInfo";

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorInfo.white,
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    }
});

export default AppStyle;
