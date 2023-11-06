interface Props {
  productsCount: number;
}

const NavBar = ({ productsCount }: Props) => {
  return (
    <>
      <div>NavBar</div>
      <p>Number of Products: {productsCount}</p>
    </>
  );
};

export default NavBar;
