import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { COLORS, color, fontSize, images, places } from "../../constain";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;
  const selectedDate = route.params;
  console.log(selectedDate);
  const [isOpen, setIsOpen] = useState(false);
  const information = () => {
    return (
      <View>
        <TextInput
          onChangeText={(text) => {
            setIsOpen(text)
          }}
        />
      </View>
    )
  }
  const formattedPrice = place.price.toLocaleString();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('MapScreen', place)}
        style={{ flexDirection: 'row', marginTop: 10 }}>
          <Icon name="place" size={28} color={color.button} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: color.button,
            }}>
            {place.location}
          </Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
          Mô tả
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22 }}>{place.details}</Text>
      </View>
      <View style={style.footer}>
        <View style={{ height: 0.5, width: "100%", backgroundColor: COLORS.dark }} />
        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', right: 35, top: 7  }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.dark,
              }}>
              {formattedPrice}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: COLORS.dark,
                marginLeft: 2,
              }}>
              /ĐÊM
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderHotel', place)}
            style={style.bookNowBtn}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
              Đặt ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    left: 35,
    top: 7,
    height: 50,
    width: 150,
    backgroundColor: color.button,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  footer: {
    // flexDirection: 'row',
    backgroundColor: COLORS.white,
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default DetailsScreen;
