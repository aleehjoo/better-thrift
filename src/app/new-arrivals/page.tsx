import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewArrivalsPage() {

	return (
		<>
		<main className="min-h-screen w-full bg-gray-50">
			<Navbar/>
			<div className="max-w-7xl mx-auto px-6 py-10">
				<h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center font-serif">
					New Arrivals
				</h1>

				{/* Action bar */}
				<div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<button className="px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition">All</button>
						<button className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition">Men</button>
						<button className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition">Women</button>
					</div>
					<div className="flex items-center gap-2">
						<button className="px-3 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100 transition">Sort</button>
						<button className="px-3 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100 transition">Filters</button>
						<div className="hidden md:flex items-center gap-1">
							<button className="px-3 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100 transition">Grid</button>
							<button className="px-3 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100 transition">List</button>
						</div>
					</div>
				</div>

				{/* Featured */}
				<div className="mb-16 grid grid-cols-1 md:grid-cols-2 items-stretch gap-8">
					<div className="group relative overflow-hidden rounded-2xl bg-gray-200 shadow-md transition-all hover:shadow-lg">
						<div className="aspect-[4/3] w-full bg-gray-200 flex items-center justify-center">
							<span className="text-gray-500">Featured Image</span>
						</div>
						<div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow">New</div>
					</div>
					<div className="flex flex-col justify-center">
						<h2 className="text-2xl md:text-3xl font-semibold mb-3">Statement Oversized Coat</h2>
						<p className="text-gray-600 mb-4 md:mb-6">Insert some text here to glaze whatever it is mainly featured in the thrift store.</p>
						<p className="text-xl font-bold mb-6">₱1800</p>
						<div className="flex items-center gap-3">
							<button className="px-5 py-2.5 rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition">Add to Cart</button>
							<button className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/40 transition">Wishlist</button>
						</div>
					</div>
				</div>

				{/* Product grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
					<div className="group rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
						<div className="relative bg-gray-100">
							<div className="aspect-[4/5] w-full flex items-center justify-center">
								<span className="text-gray-500">Image</span>
							</div>
							<div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-800 shadow">New</div>
							<div className="pointer-events-none absolute inset-0 hidden items-end justify-center gap-2 bg-black/0 p-3 transition group-hover:flex group-hover:bg-black/10">
								<button className="pointer-events-auto px-3 py-2 rounded-md bg-white text-gray-900 text-xs font-medium shadow hover:bg-gray-100">Quick View</button>
								<button className="pointer-events-auto px-3 py-2 rounded-md bg-black text-white text-xs font-medium shadow hover:bg-gray-800">Add to Cart</button>
							</div>
						</div>
						<div className="p-4">
							<div className="flex items-start justify-between gap-2">
								<h3 className="font-medium text-gray-900">Retro Corduroy Jacket</h3>
								<p className="text-sm font-semibold text-gray-700">₱1200</p>
							</div>
							<div className="mt-3 flex items-center gap-3">
								<button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">Wishlist</button>
								<button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">Compare</button>
							</div>
						</div>
					</div>

					<div className="group rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
						<div className="relative bg-gray-100">
							<div className="aspect-[4/5] w-full flex items-center justify-center">
								<span className="text-gray-500">Image</span>
							</div>
							<div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-800 shadow">New</div>
							<div className="pointer-events-none absolute inset-0 hidden items-end justify-center gap-2 bg-black/0 p-3 transition group-hover:flex group-hover:bg-black/10">
								<button className="pointer-events-auto px-3 py-2 rounded-md bg-white text-gray-900 text-xs font-medium shadow hover:bg-gray-100">Quick View</button>
								<button className="pointer-events-auto px-3 py-2 rounded-md bg-black text-white text-xs font-medium shadow hover:bg-gray-800">Add to Cart</button>
							</div>
						</div>
						<div className="p-4">
							<div className="flex items-start justify-between gap-2">
								<h3 className="font-medium text-gray-900">Minimalist Graphic Tee</h3>
								<p className="text-sm font-semibold text-gray-700">₱550</p>
							</div>
							<div className="mt-3 flex items-center gap-3">
								<button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">Wishlist</button>
								<button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">Compare</button>
							</div>
						</div>
					</div>

					<div className="group rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
						<div className="relative bg-gray-100">
							<div className="aspect-[4/5] w-full flex items-center justify-center">
								<span className="text-gray-500">Image</span>
							</div>
							<div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-800 shadow">New</div>
							<div className="pointer-events-none absolute inset-0 hidden items-end justify-center gap-2 bg-black/0 p-3 transition group-hover:flex group-hover:bg-black/10">
								<button className="pointer-events-auto px-3 py-2 rounded-md bg-white text-gray-900 text-xs font-medium shadow hover:bg-gray-100">Quick View</button>
								<button className="pointer-events-auto px-3 py-2 rounded-md bg-black text-white text-xs font-medium shadow hover:bg-gray-800">Add to Cart</button>
							</div>
						</div>
						<div className="p-4">
							<div className="flex items-start justify-between gap-2">
								<h3 className="font-medium text-gray-900">Vintage Leather Boots</h3>
								<p className="text-sm font-semibold text-gray-700">₱1600</p>
							</div>
							<div className="mt-3 flex items-center gap-3">
								<button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">Wishlist</button>
								<button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">Compare</button>
							</div>
						</div>
					</div>
				</div>

				{/* Pagination/collection CTAs */}
				<div className="mt-10 flex flex-col items-center gap-4">
					<button className="px-6 py-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition">Load more</button>
					<div className="w-full rounded-2xl bg-gray-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
						<div>
							<p className="text-sm uppercase tracking-wide text-white/70">This week’s drop</p>
							<h3 className="mt-1 text-xl md:text-2xl font-semibold">Fresh finds, limited quantities</h3>
						</div>
						<div className="flex items-center gap-3">
							<button className="px-5 py-2.5 rounded-md bg-white text-gray-900 hover:bg-gray-100 transition">View full collection</button>
							<button className="px-5 py-2.5 rounded-md border border-white/30 hover:bg-white/10 transition">Notify me</button>
						</div>
					</div>
				</div>
			</div>
		</main>
		<Footer />
		</>
	);
}
