"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { createContext, useContext, useState } from "react"
const defaultValue = {
	isVisible: false,
	modalProps: {
		title: null,
		children: null
	},
	open: () => {},
	close: () => {}
}
const ModalContext = createContext(defaultValue)

const ModalProvider = ({ children }) => {
	const [value, setValue] = useState(defaultValue)

	return (
		<ModalContext.Provider
			value={{
				value,
				setValue,
				open: (modelProps) =>
					setValue((v) => ({ ...v, isVisible: true, modalProps: modelProps ?? defaultValue.modalProps })),
				close: () => setValue((v) => ({ ...v, isVisible: false, modalProps: defaultValue.modalProps }))
			}}
		>
			{children}

			<Dialog
				open={value.isVisible}
				onOpenChange={(bool) => {
					setValue((v) => ({ ...v, isVisible: bool }))
				}}
			>
				<DialogContent className="min-h-[80vh] min-w-[50%]">
					<DialogHeader>
						<DialogTitle>{value.modalProps.title}</DialogTitle>
					</DialogHeader>

					{value.modalProps.children}
				</DialogContent>
			</Dialog>
		</ModalContext.Provider>
	)
}

const useModal = () => {
	const model = useContext(ModalContext)

	return {
		open: model.open,
		close: model.close,
		renderButton: (buttonText, modelProps) => {
			return (
				<button
					type="button"
					onClick={() => {
						model.open(modelProps)
					}}
				>
					{buttonText}
				</button>
			)
		}
	}
}

export { ModalContext as Modal, ModalProvider, useModal }
