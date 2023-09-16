import { StyledSecao } from "./style"
import Card from "./Card"

interface SecaoProps {
    titulo: String
    texto: String
    cards: {
        nome: string
        imagem: string
    }[]
}

export default function Secao({ titulo, texto, cards }: SecaoProps) {
    return(
        <StyledSecao>
            <h2>{titulo}</h2>
            <p>{texto}</p>
            <div className="cards">
                {cards.map(card => (
                    <Card key={card.nome} {...card}/>   
                ))}
            </div>
        </StyledSecao>
    )
}