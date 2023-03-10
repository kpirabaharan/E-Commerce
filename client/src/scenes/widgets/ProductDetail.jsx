import { Link } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  return (
    <div className='flex flex-col justify-start h-[90vh] pt-4 z-0'>
      <div className='flex flex-row justify-center h-[50%]'>
        <div className='flex justify-center basis-1/2'>
          <img
            className='h-auto w-auto block object-contain'
            src={`http://localhost:8080/assets/${product.picturePath}`}
            alt={product.picturePath}
          />
        </div>
        <div className='flex flex-col basis-1/2 justify-between'>
          <div className='flex flex-col'>
            <Link className='text-gray-600' to={'..'} relative='route'>
              Home
            </Link>
            <div className='flex flex-col pt-16'>
              <p className='text-xl font-bold'>{product.name}</p>
              <p>${product.cost}</p>
              <p className='text-sm pt-4'>{product.description}</p>
            </div>
          </div>
          <div>
            <button class='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
