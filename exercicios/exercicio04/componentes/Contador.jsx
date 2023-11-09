import React, { useState } from "react";
import { Text, Button, View } from "react-native";

export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial);
    const [resultado, setResultado] = useState();

    function inc() {
        setNumero(numero + passo);
    }

    function dec() {
        setNumero(numero - passo);
    }

    function verificaParImpar() {
        // numero % 2 == 0 ? "O número é par" : "O número é ímpar"
        if (numero % 2 == 0) {
            return setResultado("par")
        } else {
            return setResultado("ímpar")
        }
    }

    return (
        <>
            <Text> {numero} </Text>
            <View>
                <Button
                    title="+"
                    onPress={inc}
                />
                <Button
                    title="-"
                    onPress={dec}
                />
                <Button title="Verificar" onPress={verificaParImpar}></Button>
                <Text>O número é {resultado}</Text>
            </View>

        </>

    )

}