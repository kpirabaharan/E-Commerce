import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className='bg-gray-300 mx-4 my-4 py-2 px-2 rounded-[20px]'>
      <div className='flex justify-center'>
        <Link to={`/product/${product._id}`}>
          <img
            className='h-[180px] max-w-[100%]'
            src={`http://localhost:8080/assets/${product.picturePath}`}
            alt={product.picturePath}
          />
        </Link>
      </div>
      <div className='flex justify-between'>
        <p className='text-sm'>{product.name}</p>
        <p className='text-sm '>{product.brand}</p>
      </div>
      <p className='text-sm font-bold'>{`$${product.cost} CAD`}</p>
    </div>
  );
};

export default ProductItem;
