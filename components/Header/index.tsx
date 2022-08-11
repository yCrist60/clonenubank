import { Text, View } from "react-native";
import {styles} from "./style";
import {AntDesign} from "@expo/vector-icons";

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.iconsheader}>
                <AntDesign name="user" size={30} color="white" style={styles.iconuser}/>
                <AntDesign name="eyeo" size={24} color="white" style={{margin:10}}/>
                <AntDesign name="questioncircleo" size={18} color="white"  style={{margin:10}}/>
                <AntDesign name="mail" size={20} color="white"  style={{margin:10}}/>
            </View>
            <Text style={styles.nomecliente}>
                Olá, Thaís
            </Text>
        </View>
    )
}   