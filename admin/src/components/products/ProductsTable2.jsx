import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "Aarav Sharma", stream: "Professional/Engineering", date: "2024-06-18", fee: 120000 },
	{ id: 2, name: "Meera Patel", stream: "General Degree", date: "2024-07-05", fee: 30000 },
	{ id: 3, name: "Rohan Gupta", stream: "Medical Degree - MBBS", date: "2024-06-25", fee: 300000 },
	{ id: 4, name: "Sneha Rao", stream: "Nursing", date: "2024-07-10", fee: 280000 },
	{ id: 5, name: "Kiran Joshi", stream: "B.Architecture", date: "2024-06-29", fee: 150000 },
	{ id: 6, name: "Vikram Singh", stream: "Medical Degree - BDS", date: "2024-06-22", fee: 280000 },
	{ id: 7, name: "Pooja Verma", stream: "General Degree", date: "2024-07-20", fee: 30000 },
	{ id: 8, name: "Rahul Deshmukh", stream: "Professional/Engineering", date: "2024-07-11", fee: 145000 },
	{ id: 9, name: "Ishika Choudhary", stream: "HMCT Degree", date: "2024-06-19", fee: 125000 },
	{ id: 10, name: "Sahil Mehta", stream: "B.Pharmacy", date: "2024-07-03", fee: 110000 },
];

const ProductsTable2 = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) =>
				product.name.toLowerCase().includes(term) ||
				product.stream.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Scholarship Applications</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search applications...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				{/* Set a max height to make it scrollable */}
				<div className='overflow-y-auto max-h-96'>
					<table className='min-w-full divide-y divide-gray-700'>
						<thead>
							<tr>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
									Applicant Name
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
									Stream
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
									Submission Date
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
									Fee Asked
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
									Review
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
									Actions
								</th>
							</tr>
						</thead>

						<tbody className='divide-y divide-gray-700'>
							{filteredProducts.map((product) => (
								<motion.tr
									key={product.id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
										{product.name}
									</td>

									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
										{product.stream}
									</td>

									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
										{product.date}
									</td>

									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
										₹{product.fee.toLocaleString()}
									</td>

									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
										<button className='text-blue-400 hover:text-blue-300 underline'>
											View Review
										</button>
									</td>

									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
										<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
											<Edit size={18} />
										</button>
										<button className='text-red-400 hover:text-red-300'>
											<Trash2 size={18} />
										</button>
									</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</motion.div>
	);
};

export default ProductsTable2;