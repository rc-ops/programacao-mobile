import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')

    return (
        <View style={estilo.elementos}>
            <TextInput
                style={estilo.campos}
                placeholder="Insira seu email"
                autoComplete="email"
                inputMode="email"
                keyboardType="email-address"
                onChangeText={(email) => setEmail(email)}
            />

            <TextInput
                style={estilo.campos}
                placeholder="Insira sua senha"
                secureTextEntry={true}
                onChangeText={(pass) => setPassword(pass)}
            />
            <Button
                style={estilo.botao}
                title="Logar"
                onPress={() => console.warn(`Usuário: ${email}, Senha: ${password}`)}
            />
        </View>
    )

}

const estilo = StyleSheet.create({
    elementos: {
        justifyContent: 'center',
        alignItems: "stretch",
        padding: 10
    },
    campos: {
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 10,
        paddingLeft: 10
    },
    botao: {
        borderRadius: 10
    }
})