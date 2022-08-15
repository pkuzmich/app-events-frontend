import {useRouter} from "next/router";
import {useState} from "react";
import styles from "@/styles/Search.module.css";

export default function Search(props) {
	const [term, setTerm] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/events/search?term=${term}`);
		setTerm('');
	};

	return (
		<div className={styles.search}>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					placeholder="Search Events"
				/>
			</form>
		</div>
	);
}
