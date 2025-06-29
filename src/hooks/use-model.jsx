"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/utils"
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
				open: (modelProps) => {
					setValue((v) => ({
						...v,
						isVisible: true,
						modalProps: modelProps ?? defaultValue.modalProps,
						wideContent: modelProps?.wideContent || false
					}))
				},
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
				{/* note: if you changed the height make it works properly in iphone and no scrolling issue with long text, + test all pages that uses the same popup */}
				<DialogContent
					// min-w-[50%]
					className={cn(
						"max-w-full py-8",
						value?.wideContent == true ? "!px-0 w-[680px]" : "w-3xl",
						value?.modalProps?.className
					)}
				>
					<DialogHeader>
						<DialogTitle className={cn(value?.wideContent == true ? "!px-6" : "")}>
							{value.modalProps.title}
						</DialogTitle>
					</DialogHeader>
					<div className="max-h-[70dvh]  overflow-y-auto">{value.modalProps.children}</div>
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
