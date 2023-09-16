import logo from "../../assets/logo-gravity.png"
import { StyledHeader } from "./style"

export default function Header() {
    return(
        <StyledHeader>
            <a href="/">
                <img src={logo} alt="Logo Gravity" />
            </a>
            <ul className="lista">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Landing</a>
                </li>
                <li>
                    <a href="/">Pages</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
                <li>
                    <a href="/">Portfolio</a>
                </li>
                <li>
                    <a href="/">Shop</a>
                </li>
                <li>
                    <a href="/">Features</a>
                </li>
                <li>
                    <a href="/">Elements</a>
                </li>
            </ul>
        </StyledHeader>
    )
}