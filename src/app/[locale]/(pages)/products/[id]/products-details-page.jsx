const products = [
	{
		id: 1,
		name: "Product 1",
		description: "This is the description for product 1",
		price: 99.99,
		image: "/product1.jpg"
	},
	{
		id: 2,
		name: "Product 2",
		description: "This is the description for product 2",
		price: 149.99,
		image: "/product2.jpg"
	},
	{
		id: 3,
		name: "Product 3",
		description: "This is the description for product 3",
		price: 199.99,
		image: "/product3.jpg"
	}
]

export default function ProductDetailsPage({ params }) {
	const { id } = params
	const product = products.find((p) => p.id === parseInt(id))

	if (!product) {
		return <p>Product not found</p>
	}

	return (
		<div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-3xl font-bold mb-4">{product.name}</h1>
			<div className="bg-gray-200 h-64 mb-4 rounded-md flex items-center justify-center">
				<span className="text-gray-500">Product Image</span>
			</div>
			<p className="text-gray-600 mb-4">{product.description}</p>
			<p className="text-lg font-bold mb-4">${product.price}</p>
			<button className="rounded-full bg-foreground text-background py-2 px-4 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
				Add to Cart
			</button>
		</div>
	)
}
