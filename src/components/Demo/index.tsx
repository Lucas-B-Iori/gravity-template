import demo from '../../assets/demo.png'
import { StyledDemo } from './style'

export default function Demo() {
    return(
        <StyledDemo>
            <h2>Gravity World</h2>
            <p>Gravity is simply the best choice for your new website. Every demo can be modified and adopted. 
                Start Creating Beautiful Websites With Gravity Unique & Creative Layouts.
            </p>
            <img src={demo} alt="Dispositivos eletrônicos mostrando uma demonstração do site" />
        </StyledDemo>
    )
}