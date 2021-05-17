
export type ProductType = {
	id: number,
	price: number,
	amount: number,
	description: string
}

function Product(props: { prod: ProductType }) {

	return (
		<p>
			Description: <br /> 
			{props.prod.description} <br />
		</p>
	);
}

export default Product;