import Botao from "../Botao"
import { StyledIntro } from "./style"

export default function Intro() {
    return(
        <StyledIntro>
            <h1>GRAVITY TEMPLATE</h1>
            <p>Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of creative professionals, startups and established business. It allows you built any size of high quality web products, thanks to massive 100+ features pages which includes over 1000 reusable UI Components where they can be easily used.</p>
            <div>
                <Botao>
                    Discover more
                </Botao>
                <Botao>
                    Purchase now
                </Botao>
            </div>
        </StyledIntro>
    )
}