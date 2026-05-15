import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import * as S from './SwiperMod.styles';

const PLACEHOLDER = 'https://placehold.co/800x400/aaaaaa/ffffff?text=Imagem';

const SwiperMod = ({ imagens = [] }) => {
  return (
    <S.Container>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2.2 },
        }}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        speed={800}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {imagens.length > 0
          ? imagens.map((src, i) => (
              <SwiperSlide key={i}>
                <S.SlideBox>
                  <img src={src} alt={`slide ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </S.SlideBox>
              </SwiperSlide>
            ))
          : [1, 2, 3, 4, 5].map((n) => (
              <SwiperSlide key={n}>
                <S.SlideBox>
                  <img src={PLACEHOLDER} alt={`slide ${n}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </S.SlideBox>
              </SwiperSlide>
            ))}
      </Swiper>
    </S.Container>
  );
};

export default SwiperMod;