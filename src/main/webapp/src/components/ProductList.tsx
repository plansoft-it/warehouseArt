
import Product, { ProductType } from './Product'

function ProductList(props: { products: ProductType[] }) {

	return (
		<div>
			{props.products.map((prod) => {
				return (
					<Product key={prod.id} prod={prod} />
				)
			})}
		</div>
	);
}

export default ProductList;