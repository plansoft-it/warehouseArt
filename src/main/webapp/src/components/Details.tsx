import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { ProductType } from './Product'

function Details(props: { prod: ProductType, isOpen: boolean, onClose: () => void }) {

	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody>
					<b> Id: </b> {props.prod.id} <br />
					<b> Price: </b> {props.prod.price} <br />
					<b> Avaiable amount: </b> {props.prod.amount} <br />
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default Details;