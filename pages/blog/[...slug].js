import { useRouter } from 'next/router';
const Blogs = () => {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<h1>Blog posts</h1>
		</div>
	);
};

export default Blogs;
