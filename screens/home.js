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
import {color, fontSize, images } from "../constain";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Carousel from 'react-native-reanimated-carousel';
// import hotelList from "./Hotel/hotelList";
const Home = () => {
    const [service, setService] = useState([
        {
            names: 'Khách sạn',
            uri: images.city_icon
        },
        {
            names: 'Chuyến bay',
            uri: images.city_icon
        },
        {
            names: 'Vé tàu',
            uri: images.city_icon
        },
        {
            names: 'Nhà hàng',
            uri: images.city_icon
        },
        {
            names: 'Điểm tham quan',
            uri: images.city_icon
        },
        {
            names: 'Top thương hiệu',
            uri: images.city_icon
        },
        {
            names: 'Ưu đãi',
            uri: images.city_icon
        },
        {
            names: 'Tour & Sự kiện',
            uri: images.city_icon
        }
    ]);
    const city = [
        {
            id: 1,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Hà Nội",
                    price: 1600,
                    addressTourist: "Hà Nội",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 2,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 3,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 4,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 5,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 6,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 7,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 8,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 9,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        },
        {
            id: 10,
            address: 'Hà Nội',
            tourist: ([
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                },
                {
                    nameTourist: "Phố cổ Hội An",
                    price: 1600,
                    addressTourist: "Quảng Nam",
                    uri: images.tourist1
                }
            ])
        }
    ];
    const [selectedTouristId, setSelectedTouristId] = useState(city[0].id);
    const slide = [
        {
            uri: images.slide2
        },
        {
            uri: images.slide2
        },
        {
            uri: images.slide2
        }
    ];
    const { width, height } = Dimensions.get('window');
    //hàm handlePressCategory sẽ cập nhật trạng thái selectedCategoryId.
    const handlePressTourist = (TouristId) => {
        setSelectedTouristId(TouristId);
    };
    //hàm handlePressValue sẽ xử lý các hoạt động cần thiết khi người dùng nhấn vào một giá trị nào đó.
    const handlePressValue = (tourist) => {
        console.log(tourist);
    };
    const [currentSlide, setCurrentSlide] = useState(0)
    const autoScrollTime = 10000;
    useEffect(() => {
        const interval = setInterval(() => {
            // tăng slide hiện tại lên 1 (hoặc trở lại slide đầu tiên nếu đang ở slide cuối cùng)
            setCurrentSlide(currentSlide => (currentSlide + 1) % slide.length);
        }, autoScrollTime);
        // xoá vòng lặp thời gian khi component unmount
        return () => clearInterval(interval);
    }, []);

    //Hàm render danh sách
    const renderTourist = ({ index, item }) => (
        <TouchableOpacity
            onPress={() => setSelectedTouristId(item.id)}
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
    //Hàm render value của danh sách
    const renderTouristValues = ({ item, index }) => {
        return (
            <View onPress={() => handlePressValue(item)} style={{
                width: "49%",
                alignItems: "center",
                marginBottom: 20,
                backgroundColor: "white",
                borderRadius: 10
            }}>
                <Image
                    source={item.uri}
                    style={{
                        width: "100%",
                        height: 150,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}
                />
                <Text>{item.nameTourist}</Text>
                <Text>{item.price}</Text>
                <Text>{item.addressTourist}</Text>

            </View>
        );
    };
    // const width = Dimensions.get('window').width;
    // const tourist = service.find((item) => item.id === selectedTouristId);

    const renderItem1 = ({ item }) => (
        <TouchableOpacity
            style={{
                width: "25%",
                alignItems: "center",
                padding: 10,
            }}
        ><Image
                source={item.uri}
                style={{
                    width: 40,
                    height: 40,
                    margin: 4,
                }}
            />
            <Text style={{
                fontSize: fontSize.h6,
                color: color.black,
                textAlign: "center"
            }}>
                {item.names}
            </Text>
        </TouchableOpacity>
    )


    return <View style={{
        flex: 100
    }}>
        <View style={{
            flex: 10,
            flexDirection: "row",
            justifyContent: "center",
            position: "relative"
        }}>
            <Image
                source={images.slide1}
                resizeMode='cover'
                style={{
                    position: "absolute",
                    width: "100%",
                    height: 130,
                    backgroundColor: "red"
                }}
            />
            <View style={{
                position: "absolute",
                flexDirection: "row",
                alignSelf: "center"
            }}>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={color.inactive}
                    style={{
                        height: 38,
                        width: 240,
                        backgroundColor: 'white',
                        alignSelf: "center",
                        borderRadius: 10,
                        fontSize: fontSize.h5,
                        paddingLeft: 30,
                        color: color.black,
                    }}
                />
                <Icon2 name="bell-o" size={23} style={{
                    paddingLeft: 12,
                    color: "white",
                    alignSelf: "center"
                }} />
            </View>
        </View>
        <View style={{
            flex: 65,
        }}>
            <ScrollView style={{
                marginHorizontal: 7,
                borderTopStartRadius: 20,
                borderTopEndRadius: 20
            }}>
                <View style={{
                    backgroundColor: "#fff",
                    borderTopEndRadius: 15,
                    borderTopStartRadius: 15,
                    marginHorizontal: 7
                }}>
                    <FlatList
                        data={service}
                        keyExtractor={(item) => item.names}
                        renderItem={renderItem1}
                        numColumns={4}
                        nestedScrollEnabled={true}
                    />
                </View>
                {/* <View style={{}}>
                    <Carousel
                        width={width}
                        height={width / 2}
                        autoPlay={true}
                        data={slide}
                        scrollAnimationDuration={1000}
                        renderItem={({ index }) => (
                            <View
                                style={{
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                    {index}
                                </Text>
                            </View>
                        )}
                    />
                </View> */}
                <View style={{
                    height: 150,
                    flex: 1
                }}>
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={3}
                        autoplayLoop
                        index={0}
                        showPagination
                        data={slide}
                        renderItem={({ item }) => (
                            <View style={{ width, justifyContent: 'center' }}>
                                <Image
                                    source={item.uri}
                                    resizeMode="contain"
                                    style={{ width, height }}
                                />
                            </View>
                        )}
                        style={{ width, height }}
                    />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={city}
                        renderItem={({ item, index }) => <HotelList

                            city={item} key={item.id} />

                        }
                        style={{
                            height: 60,
                        }}
                        keyExtractor={(item) => item.id}
                        nestedScrollEnabled={true}
                    />

                </View>
                <View style={{
                    marginTop: 20
                }}>

                </View>
            </ScrollView>
        </View>

    </View >
}
export default Home;