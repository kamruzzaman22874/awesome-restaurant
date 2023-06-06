import { Helmet } from 'react-helmet-async';
import BossCategory from '../../../components/BossCategory/BossCategory';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefRecommends from '../chefRecommends/chefRecommends';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Awesome Restaurant | Home </title>
			</Helmet>
			<Banner></Banner>
			<Category></Category>
			<BossCategory></BossCategory>
			<PopularMenu></PopularMenu>
			<Featured></Featured>
			<Testimonials></Testimonials>
			<Contact></Contact>
			<ChefRecommends></ChefRecommends>
		</div>
	);
};

export default Home;
