import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';

const Main = () => {
	const location = useLocation();
	const noHeaderFooter =
		location.pathname.includes('/login') ||
		location.pathname.includes('/signup');
	return (
		<div>
			{noHeaderFooter || <Header></Header>}
			<Outlet></Outlet>
			{noHeaderFooter || <Footer></Footer>}
		</div>
	);
};

export default Main;
