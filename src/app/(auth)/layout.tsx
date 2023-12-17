import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className='flex h-[50vh] w-full justify-center items-center '>{children}</div>;
};

export default AuthLayout;
