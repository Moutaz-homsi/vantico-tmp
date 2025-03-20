import Image from "next/image"
import Link from "next/link"
import ProductsList from "../shared/products-list"

// Mock product data
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for product 1",
    price: 99.99,
    image: "/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for product 2",
    price: 149.99,
    image: "/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for product 3",
    price: 199.99,
    image: "/product3.jpg",
  },
]

export default function ProductsPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <h1 className="text-3xl font-bold">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 flex flex-col">
              <Link href={`/products/${product.id}`} className="block">
                <div className="bg-gray-200 h-48 mb-4 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </Link>
              <button className="mt-4 rounded-full bg-foreground text-background py-2 px-4 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <ProductsList />
        <Link
          href="/"
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Back to Home
        </Link>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/">
          Home
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </footer>
    </div>
  )
}
