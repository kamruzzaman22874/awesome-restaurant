import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../layouts/Dashboard';
import Main from '../layouts/Main';
import AddItem from '../pages/Dashboard/AddItem/AddItem';
import AdminHome from '../pages/Dashboard/AdminHome/AdminHome';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems';
import MyCart from '../pages/Dashboard/MyCart/MyCart';
import Payment from '../pages/Dashboard/Payment/Payment';
import UserHome from '../pages/Dashboard/UserHome/UserHome';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import SignUp from '../pages/SignUp/SignUp';
import AdminRoutes from './AdminRoutes';
import PrivateRoutes from './PrivateRoutes';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/menu',
				element: <Menu></Menu>,
			},
			{
				path: '/order/:category',
				element: <Order></Order>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoutes>
				<Dashboard></Dashboard>
			</PrivateRoutes>
		),
		children: [
			{
				path: 'userhome',
				element: <UserHome></UserHome>,
			},
			{
				path: 'mycart',
				element: <MyCart></MyCart>,
			},
			{
				path: 'payment',
				element: <Payment></Payment>,
			},

			// admin routes
			{
				path: 'adminhome',
				element: <AdminRoutes><AdminHome/></AdminRoutes>
			},
			{
				path: 'allusers',
				element: (
					<AdminRoutes>
						<AllUsers />
					</AdminRoutes>
				),
			},
			{
				path: 'addItem',
				element: (
					<AdminRoutes>
						<AddItem />
					</AdminRoutes>
				),
			},
			{
				path: 'manageitems',
				element: (
					<AdminRoutes>
						<ManageItems />
					</AdminRoutes>
				),
			},
		],
	},
]);
