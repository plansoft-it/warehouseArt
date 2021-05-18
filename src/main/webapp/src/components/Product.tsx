export type ProductType = {
	id: number,
	price: number,
	ammount: number,
	description: string
}

function Product(props: { prod: ProductType }) {
	return (
		<h3> {props.prod.description} </h3>
	);
}

export default Product;