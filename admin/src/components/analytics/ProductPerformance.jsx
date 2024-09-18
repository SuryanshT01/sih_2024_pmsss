import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

// Updated data to represent scholarship metrics
const scholarshipPerformanceData = [
	{ name: "General Degree", approvals: 4000, amount: 2400, disbursement: 2200 },
	{ name: "Engineering", approvals: 3000, amount: 3400, disbursement: 3200 },
	{ name: "Medical", approvals: 2000, amount: 4800, disbursement: 4000 },
	{ name: "Nursing", approvals: 2780, amount: 3000, disbursement: 2780 },
	{ name: "Pharmacy", approvals: 1890, amount: 2800, disbursement: 2100 },
];

const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Scholarship Performance by Stream</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={scholarshipPerformanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='approvals' fill='#8B5CF6' />
						<Bar dataKey='amount' fill='#10B981' />
						<Bar dataKey='disbursement' fill='#F59E0B' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default ProductPerformance;
