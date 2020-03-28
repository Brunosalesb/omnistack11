//#region IMPORTS
import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import logoImg from "../../assets/logo.png";
import styles from "./styles";
//#endregion

export default function Detalhes() {
    
    //#region CONST
    const navigation = useNavigation();
    const route = useRoute();
    const caso = route.params.caso;
    const mensagem = `Olá ${caso.nome}, estou entrando em contato pois gostaria de ajudar no caso "${caso.titulo}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}`;
    //#endregion

    //#region NAVIGATION
    function irParaCasos() {
        navigation.goBack();
    }
    //#endregion

    //#region CONTACT
    function enviarEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${caso.titulo}`,
            recipients: [caso.email],
            body: mensagem
        })
    }

    function enviarWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${mensagem}`);
    }
    //#endregion

    //#region HTML
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={irParaCasos}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty, { marginTop: 0 }}>ONG:</Text>
                <Text style={styles.incidentValue}>{caso.nome} de {caso.cidade}/{caso.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{caso.titulo}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={enviarWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={enviarEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    //#endregion
}