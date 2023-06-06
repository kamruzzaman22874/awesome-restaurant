import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/UseAdmin';
import useAuth from '../hooks/useAuth';

const AdminRoutes = ({ children }) => {
	const { user, loading } = useAuth();
	const [isAdmin, isAdminLoading] = useAdmin();
	const location = useLocation();
	if (loading || isAdminLoading) {
		return <h2>Loading.....</h2>;
	}
	if (user && isAdmin) {
		return children;
	}
	return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
