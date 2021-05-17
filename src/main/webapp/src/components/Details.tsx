import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton, Button, } from "@chakra-ui/react"
import { ProductType } from './Product'

function Details(props: { prod: ProductType, isOpen: boolean, onClose: () => void }) {

	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody>
					{props.prod.id} <br />
					Price: {props.prod.price} <br />
			 		Avaiable amount: {props.prod.amount} <br />
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default Details;