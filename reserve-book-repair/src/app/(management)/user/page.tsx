import { getUser } from '@/lib/user/getUser';
import UserManagementClient from './UserManagementClient';

export default async function UserManagementPage() {
	const users = await getUser();
	return <UserManagementClient users={users} />;
}
