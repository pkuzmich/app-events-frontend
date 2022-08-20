import styles from "@/styles/AuthForm.module.css";
import {FaUser} from "react-icons/fa";
import {toast, ToastContainer} from "react-toastify";
import Link from "next/link";
import Layout from "@/components/Layout";
import {useState} from "react";

export default function RegisterPage() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== passwordConfirm) {
			toast.error('Passwords do not match!');
			return;
		}

		console.log({username,  email, password});
	};

	return (
		<Layout title='User Registration'>
			<div className={styles.auth}>
				<h1>
					<FaUser /> Register
				</h1>
				<ToastContainer />
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Username</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="email">E-mail Address</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="passwordConfirm">Confirm Password</label>
						<input
							type="password"
							id="passwordConfirm"
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						/>
					</div>
					<input type="submit" value="Registration" className='btn'/>
					<p>
						Already have an account? <Link href='/account/login'>Login</Link>
					</p>
				</form>
			</div>
		</Layout>
	);
}