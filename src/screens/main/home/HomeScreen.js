import { Avatar, Button, Divider, IconButton, Text } from "@react-native-material/core";
import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "../../../common/AppIcons";
import AppStyle from "../../../common/AppStyle";
import ColorInfo from "../../../common/ColorInfo";
import MainLayout from "../../../layouts/MainLayout";
import LinearGradient from "react-native-linear-gradient";

const HomeScreen = (props) => {

    const [dataInfo, setDataInfo] = useState({
        name: 'Sebastian',
        description: 'Incredible sense of empathy and always go out of the way to make others feel good'
    });
    return (
        <MainLayout >
            <ScrollView style={[AppStyle.paddingHorizontal]}>
                <TouchableHighlight>
                    <>
                        <View style={[AppStyle.flex_row, {
                            justifyContent: 'space-between'
                        }]}>
                            <IconButton icon={props => <MaterialIcons name="notifications-none" size={30} color={ColorInfo.gray} />} />
                            <IconButton icon={props => <MaterialIcons name="menu" size={30} color={ColorInfo.gray} />} />
                        </View>
                        <View style={[styles.cardContainer, {
                            backgroundColor: '#F7F8FB',
                            marginTop: 30
                        }]}>
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
                                    <TouchableOpacity>
                                        <LinearGradient style={{
                                            borderRadius: 10,
                                            paddingHorizontal: 10, paddingVertical: 4
                                        }} colors={['#176A6D', '#4d9b9e']}>
                                            <Text style={{
                                                color: ColorInfo.white, fontSize: 12,
                                                textAlign: 'center'
                                            }}>Working</Text>
                                        </LinearGradient>
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
                        <LinearGradient
                            colors={['#31878A', '#44A7AB', '#7AB8B9', '#7AB8B9']}
                            style={[styles.cardContainer, { marginTop: 20 }]}>
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
                        </LinearGradient>
                        <View
                            style={[styles.cardContainer, AppStyle.flex_row_start, { marginTop: 20 }]}>
                            <View style={{ paddingRight: 10 }}>
                                <Image source={require('../../../assets/img/icons/ic_milestone.png')} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={[AppStyle.flex_row, { justifyContent: 'space-between' }]}>
                                    <LinearGradient colors={['#A42810', '#ED5235']} style={[styles.buttonMilestone]}>
                                        <Text color={ColorInfo.white} style={{ fontSize: 13 }}>Milestone</Text>
                                    </LinearGradient>
                                    <Text color={'#696969'} style={{ fontSize: 13 }}>12 July 2023</Text>
                                </View>
                                <View style={{ paddingTop: 10 }}>
                                    <Text color="#696969">Vivamus eget sodales risus, ac dignissim mauris. Maecenas ac diam placerat, fermentum sem a.</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.cardContainer, { marginTop: 20 }]}>
                            <View
                                style={[AppStyle.flex_row_start]}>
                                <View style={{ paddingRight: 10 }}>
                                    <Image source={require('../../../assets/img/icons/ic_promotion.png')} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={[AppStyle.flex_row]}>
                                        <Text style={{ fontWeight: 'bold', flex: 1, paddingRight: 10 }}>Promotion</Text>
                                        <Text color={'#696969'} style={{ fontSize: 13 }}>12 July 2023</Text>
                                    </View>
                                    <View style={{ paddingTop: 10 }}>
                                        <Text color="#696969">Donec volutpat augue quis ornare consectetur. Etiam sodales returm lectus in congue.</Text>
                                    </View>
                                </View>
                            </View>
                            <Divider style={{ marginVertical: 12 }} />
                            <View
                                style={[AppStyle.flex_row_start]}>
                                <View style={{ paddingRight: 10 }}>
                                    <Image source={require('../../../assets/img/icons/ic_reward.png')} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={[AppStyle.flex_row]}>
                                        <Text style={{ fontWeight: 'bold', flex: 1, paddingRight: 10 }}>Reward</Text>
                                        <Text color={'#696969'} style={{ fontSize: 13 }}>12 July 2023</Text>
                                    </View>
                                    <View style={{ paddingTop: 10 }}>
                                        <Text color="#696969">You have been selected for this reward for you excellent performance last month.</Text>
                                    </View>
                                </View>
                            </View>
                            <Divider style={{ marginVertical: 12 }} />
                            <View
                                style={[AppStyle.flex_row_start]}>
                                <View style={{ paddingRight: 10 }}>
                                    <Image source={require('../../../assets/img/icons/ic_warning.png')} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={[AppStyle.flex_row]}>
                                        <Text style={{ fontWeight: 'bold', flex: 1, paddingRight: 10 }}>Warning from HR</Text>
                                        <Text color={'#696969'} style={{ fontSize: 13 }}>12 July 2023</Text>
                                    </View>
                                    <View style={{ paddingTop: 10 }}>
                                        <Text color="#696969">Fusce luctus ante in congue molestie. Nam vel libero at nisl finibus porta sit amet vitae lacus.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                </TouchableHighlight>
            </ScrollView>
        </MainLayout>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: ColorInfo.white,
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: ColorInfo.white
    },
    buttonMilestone: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8
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
        minHeight: 100,
        borderRadius: 16
    }
});

export default HomeScreen;