import Button from "../../../Button"
import CardBoxCash from "./CardBoxCash"

export default (props) => {
    return (
        <CardBoxCash style={{backgroundImage: `url("https://cdn.minecart.com.br/assets/img/cash-background.png")`}}>
            <div className="title">
                <img src="https://cdn.minecart.com.br/assets/img/cash.png"/>
                COMPRE CASH!
            </div>

            <div className="description">
                Use Cash para comprar itens especiais e outros benefícios dentro do jogo!
            </div>

            <div className="button">
                <Button>COMPRAR CASH</Button>
            </div>
        </CardBoxCash>
    )
}
