import { useEffect, useState } from "react"

const ProductList = ({category}: {category: string}) => {    
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching Products in', category);
    setProducts([category])
  }, [category]);

  return (
    <div>
      {products && products.map(product => <li key={product}>{product}</li>)}
    </div>
  )
}

export default ProductList