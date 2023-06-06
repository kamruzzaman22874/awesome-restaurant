import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
	const { googleSignIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const loggedUser = result.user;
				const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
				// console.log(loggedUser);
				fetch('http://localhost:5000/users', {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify(saveUser),
				})
					.then((res) => res.json())
					.then(() => {
						navigate(from, { replace: true });
					});
			})
			.catch((err) => {});
	};
	return (
		<div>
			<div className='divider'></div>
			<div className='w-full text-center my-2'>
				<button
					onClick={handleGoogleSignIn}
					className='btn btn-circle btn-outline'>
					<FaGoogle />
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
