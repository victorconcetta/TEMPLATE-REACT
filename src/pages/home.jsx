
import * as S from './home.styles.jsx'
import DivComum from '../components/DivComum.jsx'
import SwiperMod from '../components/SwiperMod.jsx'
import BannerFull from '../components/BannerFull.jsx'
import BannerImagemFull from '../components/BannerImagemFull.jsx'
import Banner3Quadrados from '../components/Banner3Quadrados.jsx'
import slide1 from "../assets/img/slide1.png"
import slide2 from "../assets/img/slide4.png"
import slide3 from "../assets/img/slide3.png"
import slide4 from "../assets/img/slide4.png"
import slide5 from "../assets/img/slide5.png"
import horta from "../assets/img/horta.png"
import verduras from "../assets/img/verduras.png"
import frutas from "../assets/img/frutas.png"
import fruta from "../assets/img/fruta.png"
import campo from "../assets/img/campo.webp"
import { Content } from '../components/DivComum.styles.jsx'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
<S.ContainerSwiper>
  <SwiperMod
    imagens={[
      slide1,
      slide2,
      slide3,
      slide4,
      slide5,
    ]}
  />
</S.ContainerSwiper>
<div className="Subpagina">

  <S.Container>
    <S.Ofertas>
<Link to="/sobre"><p>CONFIRA NOSSAS OFERTAS DA SEMANA!</p></Link>
</S.Ofertas>


    <S.DivCentro>
  <S.DivCentroTexto>
  <h1>Comer Bem é Cuidar de Você</h1>
      <p>A base de uma vida saudável está no prato. Frutas, legumes e verduras frescos fornecem vitaminas, minerais e energia que o corpo reconhece e aproveita de verdade — sem mistério, sem ingredientes estranhos.</p>
  </S.DivCentroTexto>

  <S.DivCentroImg>
    <img src={fruta} alt="frutas" />
  </S.DivCentroImg>
</S.DivCentro>
<br />


<S.Banner3>
<Banner3Quadrados style={{ opacity: '0.75' }}
  src1={verduras}
  src2={horta}
  src3={frutas}
/>
</S.Banner3>
    <S.DivCentro>
        <S.DivCentroImg>
    <img src={campo} alt="campo" />
  </S.DivCentroImg>
  <S.DivCentroTexto>
  <h1>A Simplicidade do Campo no seu Prato</h1>
     <p>Existe uma sabedoria antiga no modo de vida do campo. Acordar cedo, trabalhar a terra e colher o que se plantou — levando isso direto pra mesa, com simplicidade e muito sabor.</p>

<p>Os alimentos que vêm do campo carregam mais do que nutrientes. Carregam sol, terra e cuidado, colhidos no ponto certo e cheios de vida.</p>
  </S.DivCentroTexto>
</S.DivCentro>

 </S.Container>
  </div>
  </>
  )
}

export default Home