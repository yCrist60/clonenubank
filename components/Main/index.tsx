import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function Main() {
    return (
        <View style={styles.main}>

            

            <View style={styles.conta}>
                <Text style={styles.txtconta}>
                    Conta
                </Text>
                <AntDesign name="right" size={20} color="black" />
            </View>
            <Text style={styles.saldo}>
                R$ 2.360,56
            </Text>

            <ScrollView horizontal={true} style={styles.transacoes}>

                {/* Pix */}
                <View style={styles.transacao}>
                    <AntDesign name="antdesign" size={20} color="black" style={styles.icontransacao} />
                    <Text>Pix</Text>
                </View>
                {/* Fim do Pix */}

                {/* Pagar */}
                <View style={styles.transacao}>
                    <AntDesign name="barcode" size={20} color="black" style={styles.icontransacao} />
                    <Text>Pagar</Text>
                </View>
                {/* Fim do Pagar */}

                {/* Pagar Emprestado */}
                <View style={styles.transacao2t}>
                    <AntDesign name="unknowfile1" size={20} color="black" style={styles.icontransacao} />
                    <Text>Pagar</Text>
                    <Text>Emprestado</Text>
                </View>
                {/* Fim do Pagar */}

                {/* Pagar transferir */}
                <View style={styles.transacao}>
                    <AntDesign name="upload" size={20} color="black" style={styles.icontransacao} />
                    <Text>Transferir</Text>
                </View>
                {/* Fim do Transferir */}


                {/* Pagar depositar */}
                <View style={styles.transacao}>
                    <AntDesign name="download" size={20} color="black" style={styles.icontransacao} />
                    <Text>Depoistar</Text>
                </View>
                {/* Fim do depositar */}

                 {/* recarga celular */}
                 <View style={styles.transacao2t}>
                    <AntDesign name="phone" size={20} color="black" style={styles.icontransacao} />
                    <Text>Recarga de</Text>
                    <Text>Celular</Text>
                </View>
                {/* Fim do depositar */}


                 {/* Pagar depositar */}
                 <View style={styles.transacao}>
                    <AntDesign name="download" size={20} color="black" style={styles.icontransacao} />
                    <Text>Depoistar</Text>
                </View>
                {/* Fim do depositar */}

            </ScrollView>

            <View style={styles.meuscartoes}>
                <AntDesign name="creditcard" size={20} color="black" style={{paddingRight:10}}/>
                <Text>Meus cartões</Text>
            </View>

            <View style={{borderBottomColor:"silver",borderWidth:0.2, marginTop:30}} />

        <AntDesign name="creditcard" size={20} color="black"/>

        <View style={styles.conta}>
                <Text style={styles.txtconta}>
                    Cartão de crédito
                </Text>
                <AntDesign name="right" size={20} color="black" />
            </View>

            <Text style={{color:"silver"}}>Fatura Atual</Text>

            <Text style={styles.saldo}>
                R$ 1.159,98
            </Text>

            <Text style={{color:"silver"}}>Fatura Atual</Text>

            <View style={{borderBottomColor:"silver", borderWidth:0.2, marginTop:30}} />

            <AntDesign name="unknowfile1" size={20} color="black"/>

            <View style={styles.conta}>
                <Text style={styles.txtconta}>
                    Empréstimo
                </Text>
                <AntDesign name="right" size={20} color="black" />
            </View>

            <Text style={{color:"silver"}}>até R$ 7.560,50 disponivel para você</Text>

            <View style={{borderBottomColor:"silver", borderWidth:0.2, marginTop:30}} />


            <AntDesign name="heart" size={20} color="black"/>

            <View style={styles.conta}>
                <Text style={styles.txtconta}>
                    Seguro de vida
                </Text>
                <AntDesign name="right" size={20} color="black" />
            </View>

            <Text style={{color:"silver"}}>Um seguro completo que cabe no seu bolso</Text>

            <View style={{borderBottomColor:"silver", borderWidth:0.3, marginTop:30, marginBottom:17}} />

            <Text style={styles.txtconta}>
                    Descubra mais
                </Text>


                <ScrollView horizontal={true}>

                <View style={styles.descubra}>

                    <Text style={{fontSize:15, fontWeight:"bold"}}>Convidar amigos</Text>

                    <Text>
                        O Nubank é um cartão de crédito sem anuidade, criado por uma startup brasileira
                        e que tem feito sucesso no país
                    </Text>
                   <Text style={styles.btndescubra}>Convidar</Text>

                </View>

                <View style={styles.descubra}>

                    <Text style={{fontSize:15, fontWeight:"bold"}}>Conta PJ</Text>

                    <Text>
                        O Nubank é um cartão de crédito sem anuidade, criado por uma startup brasileira
                        e que tem feito sucesso no país
                    </Text>
                   <Text style={styles.btndescubra}>Saiba mais</Text>

                </View>






                </ScrollView>




        </View>
    )
}