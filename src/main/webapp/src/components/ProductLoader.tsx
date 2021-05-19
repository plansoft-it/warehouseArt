import { Container } from '@chakra-ui/layout';
import { useState, useEffect } from 'react'
import ProductList from './ProductList';

function ProductLoader() {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/products")
			.then(response => {
				if (!response.ok)
					throw Error(response.statusText);
				return response.json();
			})
			.then((json) => {
				setProducts(json);
			});
	}, [])

	return (
		<Container centerContent>
			<ProductList products={products} />
		</Container>
	)
}

export default ProductLoader;