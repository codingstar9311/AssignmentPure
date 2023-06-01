import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ColorInfo from '../../common/ColorInfo';
import AppStyle from '../../common/AppStyle';
import Global from '../../common/Global';

const AppSplashScreen = (props) => {
    const { navigation } = props;

    const onLoadInitData = async () => {

    };

    useEffect(() => {
        Global.totalNavigator = navigation;
        onLoadInitData();
    }, []);

    return (
        <View style={[styles.container, AppStyle.center]}>
            <Text>this is splash screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroudColor: ColorInfo.white,
    },
});

export default AppSplashScreen;
