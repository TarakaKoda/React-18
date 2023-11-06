interface Props {
  products: string[];
}

const Cart = ({ products }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {products.map(product => <li key={product}>{product}</li>)}
      </ul>
    </>
  );
};

export default Cart;
