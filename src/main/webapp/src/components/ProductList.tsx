
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react'
import Details from './Details';
import Product, { ProductType } from './Product'

function ProductList(props: { products: ProductType[] }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialProd: ProductType = { id: -1, price: -1, amount: -1, description: "" }
	const [prod, setProd] = useState(initialProd);

	return (
		<div>
			{props.products.map((product) => {
				return (
					<>
						<Product key={product.id} prod={product} />
						<button onClick={() => { setProd(product); onOpen(); }}> Details </button>
					</>
				)
			})}
			<Details prod={prod} isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default ProductList;