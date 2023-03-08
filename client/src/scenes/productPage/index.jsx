import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useMediaQuery from '../../hooks/useMediaQuery';
import { fetchProductData } from '../../state/product-actions';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import ProductCarousel from '../widgets/ProductCarousel';
import ProductQuery from '../widgets/ProductQuery';
import ProductGrid from '../widgets/ProductGrid';
import Footer from '../widgets/Footer';

const ProductPage = () => {
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const searchBarBackground = isTopOfPage ? '' : 'bg-blue';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(fetchProductData('all'));
  }, []);

  return (
    <div className='flex flex-col'>
      <div
        className={`z-[40] fixed h-[7.5rem] sm:h-16 w-full flex flex-col ${searchBarBackground}`}
      >
        <Navbar isTopOfPage={isTopOfPage} />
        {!isAboveSmallScreens && (
          <div>
            <SearchBar isSmallScreen={true} />
          </div>
        )}
      </div>
      <div className='w-full mx-auto pt-[120px] sm:pt-24'>
        <ProductCarousel />
      </div>
      <div className='mx-auto pt-4'>
        <ProductQuery />
      </div>
      <div className='w-[90%] mx-auto md:h-full pt-2 pb-8 sm:pt-2'>
        <ProductGrid />
      </div>
      <div className='bg-cyan-100'>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;

// export const productsLoader = async () => {
//   const response = await fetch('http://localhost:8080/products/all');

//   if (!response.ok) {
//     throw new Error('Fetch Response Failed!');
//   }

//   const products = await response.json();
//   return products;
// };
