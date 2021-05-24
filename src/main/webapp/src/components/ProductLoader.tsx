import { Container } from '@chakra-ui/layout';
import { useState, useEffect } from 'react'
import ProductList from './ProductList';

function ProductLoader() {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`http://${process.env.REACT_APP_BACKEND_HOST_API}/products`)
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