import { Contato } from "./style";

interface ContactsProps {
    icone: string,
    texto1: string,
    texto2: string
}

export default function Contacts({ icone, texto1, texto2 }: ContactsProps) {
    return(
        <Contato>
            <div className="icone">
                <span>
                    <i className={icone}></i>
                </span>
            </div>
            <div className="info">
                <p>{texto1}</p>
                <p>{texto2}</p>
            </div>
        </Contato>
    )
}