'use client';
import FeaturedProduct from '@/components/FeaturedProduct';
import Footer from '@/components/Footer';
import HeaderSlider from '@/components/HeaderSlider';
import HomeProducts from '@/components/HomeProducts';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='px-6 md:px-16 lg:px-32'>
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
      </div>
      <Footer />
    </>
  );
}
