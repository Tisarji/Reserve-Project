export async function getUser() {
	const res = await fetch(`${process.env.BACKEND_URL}/api/users`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}
