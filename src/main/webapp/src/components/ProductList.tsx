import { Button, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react'
import Details from './Details';
import Product, { ProductType } from './Product'

function ProductList(props: { products: ProductType[] }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialProd: ProductType = { id: -1, price: -1, ammount: -1, description: "" }
	const [prod, setProd] = useState(initialProd);

	return (
		<div>
			{props.products.map((product) => {
				return (
					<div key={product.id} className="card">
						<Product prod={product} />
						<Button onClick={() => { setProd(product); onOpen(); }}> Details </Button>
					</div>
				)
			})}
			<Details prod={prod} isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default ProductList;