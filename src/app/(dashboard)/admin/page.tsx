import getCurrentUser from '@/actions/getCurrentUser'
import { redirect } from 'next/navigation';
import UserDetails from '@/components/UserDetails';

const page = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect('/signin');
  }
  if (currentUser?.role !== 'admin') {
    redirect('/');
    return <div>Unauthorized</div>
  }
  if (currentUser?.role === 'admin') {
    return <UserDetails />
  }
  return (
    <div>something went wrong</div>
  )
}

export default page