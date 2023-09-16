import logo from '../../assets/logo-gravity.png'
import * as C from './style'
import Posts from "./components/Posts"
import { StyledLinks } from './components/Posts/style'
import Contacts from './components/Contacts'

const posts = [
    {
        "titulo": "1000+ Unique Elements",
        "data": "Mar 25, 2021"
    },
    {
        "titulo": "500+ Reusable Features",
        "data": "Feb 15, 2021"
    },
    {
        "titulo": "Home & Landing Layouts",
        "data": "Jan 05, 2021"
    }
]

const links = [
    "Modern Pages",
    "Our Portfolio",
    "Blog & News",
    "eCommerce Pages",
    "Admin Dashboard"
]

const contacts = [
    {
        "icone": "fa fa-map-marker",
        "texto1": "123 Lincoln Ave, Suite 555,",
        "texto2": "San Francisco, CA 98765"
    },
    {
        "icone": "fa fa-phone",
        "texto1": "+1 555 555 5555",
        "texto2": "+1 777 777 7777"
    },
    {
        "icone": "fa fa-globe",
        "texto1": "info@yoursite.com",
        "texto2": "www.yoursite.com"
    },
]

export default function Infos() {
    return(
        <C.StyledInfos>
            <div className='descricao'>
                <img src={logo} alt="Logo Gravity" />
                <p>Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of professionals.</p>
                <p>These professionally designed demos below are built to give you a boosted start for your project. Build Your websites like a lego.</p>
            </div>
            <div className='descricao'>
                <C.SubTitulos>Latest posts</C.SubTitulos>
                <ul>
                    {posts.map(post => (
                        <Posts key={post.data} {...post}/>
                    ))}
                </ul>
            </div>
            <div className='descricao' style={{gap: "12px"}}>
                <C.SubTitulos>Useful links</C.SubTitulos>
                {links.map((link, index) => (
                    <StyledLinks key={index}>
                        {link}
                    </StyledLinks>
                ))}
            </div>
            <div className='descricao'>
                <C.SubTitulos>Our contacts</C.SubTitulos>
                {contacts.map((contact, index) => (
                    <Contacts key={index} {...contact}/>
                ))}
            </div>
        </C.StyledInfos>
    )
}