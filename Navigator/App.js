import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    Home,
    InformationRegister,
    Login,
    Register,
    HomeScreen,
    DetailsScreen,
    OnBoardScreen,
    SearchHotel,
    CalendarScreen,
    SearchComponentHotel,
    OrderHotel,
    MapScreen
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import UITab from "./UITab";
const Stack = createNativeStackNavigator()

const App = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='OnBoardScreen' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={"Login"} component={Login} />
            <Stack.Screen name={"Register"} component={Register} />
            <Stack.Screen name={"InformationRegister"} component={InformationRegister} />
            <Stack.Screen name={"Home"} component={UITab} />
            <Stack.Screen name={"DetailsScreen"} component={DetailsScreen} />
            <Stack.Screen name={"OnBoardScreen"} component={OnBoardScreen} />
            <Stack.Screen name={"SearchHotel"} component={SearchHotel} />
            <Stack.Screen name={"SearchComponentHotel"} component={SearchComponentHotel} />
            <Stack.Screen name={"OrderHotel"} component={OrderHotel} />
            <Stack.Screen name={"MapScreen"} component={MapScreen} />
        </Stack.Navigator>

    </NavigationContainer>
}
export default App