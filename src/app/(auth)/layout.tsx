import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className='flex h-screen w-full justify-center items-center '>
    <div className='w-[400px] bg-slate-200 p-10 rounded-lg shadow-lg'>
      {children}
    </div>
  </div>;
};

export default AuthLayout;
