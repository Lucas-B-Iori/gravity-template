import { StyledCard } from "./style"

interface CardProps {
    nome: string
    imagem: string
}

export default function Card({ nome, imagem }: CardProps) {
    return(
        <StyledCard>
            <img src={imagem} alt={nome} />
            <span>{nome.toUpperCase()}</span>
        </StyledCard>
    )
}