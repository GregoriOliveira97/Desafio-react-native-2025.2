import CatalogoScreen from "@/app/(tabs)/explore";
import HomeScreen from "@/app/(tabs)/index";
import Login from "@/app/(tabs)/login";
import GerenciamentoScreen from "@/app/(tabs)/management";


import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator()

export function StackNavigator(){
    <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="management" component={GerenciamentoScreen}/>
        <Stack.Screen name="catalog" component={CatalogoScreen}/>
        <Stack.Screen name="login" component={Login}/>
    </Stack.Navigator>
}