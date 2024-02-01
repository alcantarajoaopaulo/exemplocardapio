import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";

function Home() {
    return <>
        <Navbar />
        <div className="container">
            <div className="titulo text-center">
                <h1>Nosso cardápio</h1>
                <p className="subtitulo">
                    Clique em adicionar para colocar os produtos na sacola de compras. Se preferir, faça seu pedido pelo Whatsapp: (61) 98152-8334
                </p>
            </div>
        </div>        

        <ProdutoVitrine />
        <ProdutoVitrine />
        <ProdutoVitrine />
        <ProdutoVitrine />
        
    </>
}

export default Home;