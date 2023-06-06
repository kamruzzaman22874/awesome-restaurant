import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
	return (
		<section>
			<SectionTitle
				subHeading={'From 11:00 am to 10:00 pm'}
				heading={'ORDER ONLINE'}></SectionTitle>
			<div className='mb-4'>
				<Swiper
					autoplay={true}
					slidesPerView={4}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination,Autoplay]}
					className='mySwiper'>
					<SwiperSlide>
						<img src={slide1} alt='' />
						<h3 className='text-3xl text-center text-white uppercase -mt-16'>
							salads
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide2} alt='' />
						<h3 className='text-3xl text-center text-white uppercase -mt-16'>
							pizza
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide3} alt='' />
						<h3 className='text-3xl text-center text-white uppercase -mt-16'>
							soup
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide4} alt='' />
						<h3 className='text-3xl text-center text-white uppercase -mt-16'>
							desserts
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide5} alt='' />
						<h3 className='text-3xl text-center text-white uppercase -mt-16'>
							salad
						</h3>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Category;
