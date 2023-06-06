import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/UseMenu';
import MenuItems from '../../shared/MenuItems';

const PopularMenu = () => {
	const [menu] = useMenu();
	const popular = menu.filter(item => item.category === 'popular');
	return (
		<section className='mb-12'>
			<SectionTitle
				subHeading='---Check it out---'
				heading='FROM OUR MENU'></SectionTitle>
			<div className='grid md:grid-cols-2 gap-10'>
				{popular.map((item) => (
					<MenuItems key={item._id} item={item}></MenuItems>
				))}
			</div>
			<div className='flex justify-center'>
				<button className='btn btn-outline border-0 border-b-4 mt-4'>
					View Full Menu
				</button>
			</div>
		</section>
	);
};

export default PopularMenu;
