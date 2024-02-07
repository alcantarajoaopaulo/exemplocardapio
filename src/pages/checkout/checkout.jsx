import { useState } from "react";

function Checkout() {

    const [valor, setValor] = useState(40);

    function Soma() {
        setValor(valor + 1);
        console.log("Soma = " + valor);
    }
    
    function Subtracao() {
        setValor(valor - 1);
        console.log("Soma = " + valor);
    }

    return <>
        <h1>Checkout: {valor}</h1>

        <h1>{valor}</h1>
        <button onClick={Subtracao}>-1</button>
        <button onClick={Soma}>+1</button>
    </>
}

export default Checkout;