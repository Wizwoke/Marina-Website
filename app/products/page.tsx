import Link from 'next/link';
import bagsPictures from '../../const/products';

function Products({ bagsPictures }) {
  console.log(bagsPictures); // Log the value of bagsPictures

  return (
    <div>
      {bagsPictures.map((bagPicture) => (
        <div key={bagPicture.id}>hi</div>
      ))}
    </div>
  );
}

export default Products;
