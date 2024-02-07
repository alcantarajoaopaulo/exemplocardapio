import { Dock } from "react-dock";

function Cart() {
    return <Dock position="right"
                isVisible={true}
                fluid={false}
                size={420}>
        <div>
            <h1>Meu Pedido</h1>
        </div>

    </Dock>
}

export default Cart;