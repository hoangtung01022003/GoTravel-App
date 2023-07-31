import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Fontisto'
import { COLORS, color, places, images, fontSize, voucher } from '../../constain';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import firebaseDatabaseRef from '../../firebase/Firebase';
const History = () => {
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Lấy dữ liệu từ Firebase Realtime Database
        const databaseRef = database().ref('order');
        databaseRef.on('value', (snapshot) => {
            const dataSnapshot = snapshot.val();
            // Chuyển đổi dữ liệu thành mảng để sử dụng trong FlatList
            const dataArray = Object.values(dataSnapshot);
            const ordersData = dataArray.map((id) => ({
                id: id,
                ...dataSnapshot[id],
            }));
            setOrders(ordersData);
            setData(dataArray);
        });

        // Clean up khi component unmount
        return () => databaseRef.off('value');
    }, []);
    // const renderItem = ({ item }) => (
    //     <View>
    //         <Text>{item.name}</Text>
    //         <Text>{item.email}</Text>
    //         <Text>{item.userName}</Text>
    //         <Text>{item.day}</Text>
    //         <Text>{item.}</Text>
    //     </View>
    // );
    const deleteName = () => {
        const databaseRef = database().ref(`order/${id}`);
        databaseRef.remove()
            .then(() => {
                Alert.alert(`Tên đã được xóa thành công`);
            })
            .catch((error) => {
                Alert.alert(`Lỗi xóa tên:`, error);
            });
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={{
            }}>
                {data.map((item) => (
                    <View key={item.id} style={{
                        top: 50,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                        paddingBottom: 10,
                    }}>
                        <Text style={{ color: COLORS.dark }}>{item.nameplace}</Text>
                        <Text style={{ color: COLORS.dark }}>{item.priceVat}</Text>
                        <TouchableOpacity onPress={() => deleteName(item.id)}>
                            <Icon name='cancel' size={15} color={'red'} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    )
}
export default History