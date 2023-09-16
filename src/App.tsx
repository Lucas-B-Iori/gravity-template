import './App.css'
import Demo from './components/Demo'
import Header from './components/Header'
import Intro from './components/Intro'
import Secao from './components/Secao'
import Compra from './components/Compra'
import Infos from './components/Infos'
import Rodape from './components/Rodape'


import pages from './json/pages.json'
import elements from './json/elements.json'
import included from './json/included.json'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Demo />
      <Secao 
        titulo="350+ Different Pages" 
        texto="These professionally designed demos below are built to give you a boosted start for your project. Every demo can easily be modified and adopted for any kind of project."
        cards={pages}
      />
      <Secao 
        titulo="1000+ Elements"
        texto="Gravity's 1000+ easy to use and customizable UI elements make it most customizable theme on the market. Build websites like a Lego. Every element can be modified for any kind of project."
        cards={elements}
      />
      <Secao 
        titulo="Included in Gravity"
        texto="Unique Features are usually collection of Base Features with or without the Global Classes. These Features can be easily used and customized in any pages."
        cards={included}
      />
      <Compra />
      <Infos />
      <Rodape />
    </>
  )
}

export default App
