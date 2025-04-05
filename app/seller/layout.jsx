'use client';
import Navbar from '@/components/seller/Navbar';
import Sidebar from '@/components/seller/Sidebar';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
