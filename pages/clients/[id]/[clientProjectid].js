import { useRouter } from 'next/router';
const SelectedClientProject = () => {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<h1>The selected Project Id</h1>
		</div>
	);
};

export default SelectedClientProject;
