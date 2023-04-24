import { Swiper, SwiperSlide, Navigation, EffectCube, Pagination, loop } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Createcard/card.css';
function Slider(props) {
  return (
    <div className="carousel">
    <Swiper spaceBetween ={20}
    slidesPerView = {3}

    >
      {props.item.map((obj)=>{
              return(
              <SwiperSlide>
                 <div className='card'>
                      <h3 className='card-title'>{obj.name}</h3>
                      <img src={obj.src}/>
                      <p className='card-subtitle'>{obj.description}</p>
                  </div>
              </SwiperSlide>
      )})}
   
    </Swiper>
    </div>
  );
}

export default Slider;