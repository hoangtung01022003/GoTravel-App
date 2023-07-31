import { Component, useEffect, useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    Dimensions
} from 'react-native';
import { fontSize, images } from "../constain";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import color from "../constain/color";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Carousel from 'react-native-reanimated-carousel';

const hotelList = (props) => {
    const { id, address, tourist, nameTourist, price, addressTourist, uri } = props
    const { navigation, route } = props;
    const { navigate, goback } = navigation
    return (
        <TouchableOpacity
            onPress={() => setSelectedTouristId(id)}
            style={{
                paddingLeft: index > 0 ? 5 : 0,
                paddingLeft: index == 0 ? 10 : 0,
                paddingRight: 5,
            }}>
            <Text
                style={{
                    paddingLeft: 7,
                    paddingRight: 7,
                    borderWidth: 1,
                    color: color.button,
                    borderColor: '#ccc',
                    textAlign: "center",
                    borderRadius: 10,
                }}>
                {item.address}
            </Text>
        </TouchableOpacity>
    )

}
export default hotelList