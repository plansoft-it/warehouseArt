
export type ProductType = {
	id: number,
	price: number,
	amount: number,
	description: string
}

function Product(props: { prod: ProductType }) {

	return (
		<div className="Product">
			<p> 
				{props.prod.id} <br />
			 	Description: {props.prod.description} <br />
			 	Price: {props.prod.price} <br />
			 	Avaiable amount: {props.prod.amount} <br /> 
			</p>
		</div>
	);
}

export default Product;