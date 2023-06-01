import { Avatar, Button, IconButton, Text } from "@react-native-material/core";
import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "../../../common/AppIcons";
import AppStyle from "../../../common/AppStyle";
import ColorInfo from "../../../common/ColorInfo";
import MainLayout from "../../../layouts/MainLayout";

const HomeScreen = (props) => {

    const [dataInfo, setDataInfo] = useState({
        name: 'Sebastian',
        description: 'Incredible sense of empathy and always go out of the way to make others feel good'
    });
    return (
        <MainLayout >
            <ScrollView style={[AppStyle.paddingHorizontal]}>
                <View style={[AppStyle.flex_row, {
                    justifyContent: 'space-between'
                }]}>
                    <IconButton icon={props => <MaterialIcons name="notifications-none" size={30} color={ColorInfo.gray} />} />
                    <IconButton icon={props => <MaterialIcons name="menu" size={30} color={ColorInfo.gray} />} />
                </View>
                <View style={[styles.cardContainer, { marginTop: 30 }]}>
                    <View style={[AppStyle.center, styles.avatarContainer]}>
                        <View style={styles.avatar}>
                            <Avatar size={80} image={require('../../../assets/img/avatars/user_avatar.png')} />
                        </View>
                    </View>
                    <View style={[AppStyle.center, { paddingVertical: 4 }]}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hello {dataInfo.name}</Text>
                    </View>
                    <View style={[AppStyle.center, { paddingTop: 12 }]}>
                        <Text style={{ textAlign: 'center', color: '#696969', fontSize: 15 }}>{dataInfo.description}</Text>
                    </View>
                    <View style={[AppStyle.flex_row, { paddingTop: 12 }]}>
                        <View style={[styles.subCard, { flex: 1, marginRight: 6 }]}>
                            <Image source={require('../../../assets/img/icons/ic_emot.png')} />
                            <TouchableOpacity style={{
                                backgroundColor: '#176a6d',
                                borderRadius: 10,
                                paddingHorizontal: 4, paddingVertical: 4
                            }}>
                                <Text style={{ color: ColorInfo.white, textAlign: 'center' }}>Working</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.subCard, { flex: 1, marginHorizontal: 3 }]}>
                            <Image source={require('../../../assets/img/icons/ic_favorite.png')} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>25</Text>
                            <Text style={{ fontSize: 14 }}>Ranking</Text>
                        </View>
                        <View style={[styles.subCard, { flex: 1, marginLeft: 6 }]}>
                            <Image source={require('../../../assets/img/icons/ic_qrcode.png')} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Rate me</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.cardContainer, { backgroundColor: '#31878A', marginTop: 20 }]}>
                    <View style={[AppStyle.flex_row]}>
                        <Image source={require('../../../assets/img/icons/ic_magic.png')} />
                        <Text color={ColorInfo.white} style={{
                            flex: 1, paddingHorizontal: 4,
                            fontWeight: 'bold'
                        }}>Smart AI Suggestions</Text>
                        <TouchableOpacity>
                            <MaterialCommunityIcons size={22} name="dots-vertical" color={ColorInfo.white} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text color={ColorInfo.white}>
                            Improve your company's environment by implementing flexible work arrangements and fostering a workplace that values collaboration. Read more...
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </MainLayout>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: ColorInfo.white,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    avatar: {
        padding: 4,
        backgroundColor: ColorInfo.white,
        borderRadius: 80,
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    avatarContainer: {
        marginTop: -80
    },
    subCard: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 6,
        backgroundColor: '#F3F3F3',
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        minHeight: 110,
        borderRadius: 16
    }
});

export default HomeScreen;