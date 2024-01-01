import getCurrentUser from '@/actions/getCurrentUser'
import { redirect } from 'next/navigation';
import HolidaysArray from './HolidaysArray'
const page = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect('/signin');
  }
  const access = currentUser?.role == 'owner'
  if (!access) {
    redirect('/');
    return <div>Unauthorized</div>
  }
  if (access) {
    return (
     <div className='w-full sm:w-1/2 p-3 m-auto'>
      <HolidaysArray currentUser={currentUser} />
    </div>  
  )
  }
  return (
    <div>something went wrong</div>
  )
}

export default page