
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
import banner1 from "../assets/img/banner_conjunto1.png"
import banner2 from "../assets/img/banner_conjunto2.png"
import banner3 from "../assets/img/banner_conjunto3.png"
import texto_imagem from "../assets/img/texto_imagem.png"
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

    <S.DivCentro>
  <S.DivCentroTexto>
  <h1>TITULO</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </S.DivCentroTexto>

  <S.DivCentroImg>
    <img src={texto_imagem} alt="imagem" />
  </S.DivCentroImg>
</S.DivCentro>
<br />


<S.Banner3>
<Banner3Quadrados style={{ opacity: '0.75' }}
  src1={banner1}
  src2={banner2}
  src3={banner3}
/>
</S.Banner3>


 </S.Container>
  </div>
  </>
  )
}

export default Home