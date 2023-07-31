import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import MapView, { MapMarker, Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, fontSize } from '../../constain';
import IconOcticons from "react-native-vector-icons/Feather"

const MapScreen = ({ navigation, route }) => {
    const place = route.params
    const mk1 = place.lat;
    const mk2 = 15.9752931;
    const haversine_distance = () => {
        const R = 3958.8; // Radius of the Earth in miles
        const rlat1 = mk1 * (Math.PI / 180); // Convert degrees to radians
        const rlat2 = mk2 * (Math.PI / 180); // Convert degrees to radians
        const difflat = rlat2 - rlat1; // Radian difference (latitudes)
        const difflon = (mk2 - mk1) * (Math.PI / 180); // Radian difference (longitudes)

        const d =
            2 * R * Math.asin(
                Math.sqrt(
                    Math.sin(difflat / 2) * Math.sin(difflat / 2) +
                    Math.cos(rlat1) *
                    Math.cos(rlat2) *
                    Math.sin(difflon / 2) *
                    Math.sin(difflon / 2)
                )
            );
        return d;
    };
    const distance = haversine_distance(mk1, mk2);
    console.log('Distance:', distance);
    return (
        <View style={{ flex: 100 }}>
            <View style={{
                flex: 10,
                // height: 100,
                width: "100%",
                backgroundColor: COLORS.white
            }}>
                <View style={{
                    top: "10%",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // alignSelf: 'center',
                    paddingHorizontal: 20,
                }}>
                    <Icon
                        name="arrow-back-ios"
                        size={28}
                        color={COLORS.dark}
                        onPress={navigation.goBack}
                    />
                    <Text style={{ fontSize: fontSize.h3 }}>GOOGLE MAP</Text>
                    <Icon name="more-vert" size={28} color={COLORS.dark} />
                </View>
            </View>
            <MapView
                style={{
                    flex: 70
                }}
                initialRegion={{
                    latitude: 15.9752931,
                    longitude: 108.2497801,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0121,
                }}
            // mapType='mutedStandard'
            >

                <MapViewDirections
                    origin={{ latitude: 15.9752931, longitude: 108.2497801 }}
                    destination={{ latitude: place.lat, longitude: place.long }}
                    apikey={"AIzaSyADvsoZrl4CIGenR63xeMjP7vOqHwwkSOI"} // insert your API Key here
                    strokeWidth={5}
                    strokeColor="hotpink"
                />
                <Marker coordinate={{ latitude: 15.9752931, longitude: 108.2497801 }} />
                <Marker coordinate={{ latitude: place.lat, longitude: place.long }} />
            </MapView>
            <View style={{
                flex: 20,
                backgroundColor: COLORS.white,
                paddingTop: 20
            }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >
                    <IconOcticons name='calendar' size={20} style={{ marginRight: 5 }} />
                    <Text style={{
                        fontFamily: "Roboto",
                        color: COLORS.black,
                        fontSize: fontSize.h2,
                        fontWeight: fontSize.fontWeight
                    }}>Trường Đại học CNTT-TH Việt Hàn</Text>
                    <IconOcticons name='arrow-right' size={20} marginHorizontal={20} />
                    <Text style={{
                        fontFamily: "Roboto",
                        color: COLORS.black,
                        fontSize: fontSize.h2,
                        fontWeight: fontSize.fontWeight
                    }}>Quãng đường: {distance} km</Text>
                </View>
            </View>
            {/* <MapMarker coordinate={{
          latitude: 10.7651934,
          longitude: 106.3539793 
        }} />
            <MapViewDirections
                origin={{ latitude: 10.7651934, longitude: 106.3539793 }}
                destination={{ latitude: 16.071746, longitude: 107.9133129}}
                apikey={"AIzaSyADvsoZrl4CIGenR63xeMjP7vOqHwwkSOI"}
                strokeWidth={50}
                strokeColor="red"
            /> */}
        </View>
    );
};

export default MapScreen;
