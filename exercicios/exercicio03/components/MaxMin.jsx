import React from "react";
import { Text } from "react-native";

export default ({ x, y }) => {
    let menor;
    let maior;
    let igual = false;

    if (y > x) {
        maior = y;
        menor = x;
    } else if (y < x) {
        maior = x;
        menor = y;
    } else {
        igual = true;
    }

    return (
        igual ? <Text>Valor {y} e {x} são iguais</Text>
            : <Text>Valor {maior} é maior que valor {menor} </Text>
    )
}