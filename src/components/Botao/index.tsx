import { StyledBotao } from "./style"

interface BotaoProps {
    children: String
}

export default function Botao({ children }: BotaoProps) {
    return(
        <StyledBotao href="/">
            {children}
        </StyledBotao>
    )
}