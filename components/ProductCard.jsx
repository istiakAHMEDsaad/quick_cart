import { useAppContext } from '@/context/AppContext';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext();
  return (
    <div
      className='flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer'
      onClick={() => {
        router.push('/product/' + product._id);
        scrollTo(0, 0);
      }}
    >
      {/* Image container */}
      <div className='cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center'>
        <Image
          src={product?.image[0]}
          alt={product?.name}
          className='group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full'
          width={800}
          height={800}
        />
        <button className='absolute top-2 right-2 bg-white p-2 rounded-full shadow-md'>
          <Image
            className='h-3 w-3'
            src={assets?.heart_icon}
            alt='heart_icon'
          />
        </button>
      </div>

      {/* Product name */}
      <p className='md:text-base text-center font-medium pt-2 w-full truncate'>
        {product?.name}
      </p>

      {/* Product description */}
      <p className='w-full text-xs text-gray-500/70 max-sm:hidden truncate'>
        {product?.description}
      </p>

      {/* Product rating */}
      <div className='flex items-center gap-2'>
        <p className='text-xs'>{4.5}</p>
        <div className='flex items-center gap-0.5'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className='h-3 w-3'
              src={
                index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon
              }
              alt='star_icon'
            />
          ))}
        </div>
      </div>

      <div className='flex items-end justify-between w-full mt-1'>
        <p className='text-base font-medium'>
          {currency}
          {product.offerPrice}
        </p>
        <button className=' max-sm:hidden px-4 py-1.5 text-xs border border-blue-600 rounded-full  hover:bg-blue-600 hover:text-white transition-colors'>
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
