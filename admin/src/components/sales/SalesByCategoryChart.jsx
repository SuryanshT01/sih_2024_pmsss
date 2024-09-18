import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const scholarshipData = [
	{ name: "General Degree", value: 5000000 }, // 5,000,000 INR
	{ name: "Professional/Engineering/Nursing", value: 10000000 }, // 10,000,000 INR
	{ name: "Medical Degree", value: 15000000 }, // 15,000,000 INR
	{ name: "MBBS/BDS", value: 8000000 }, // 8,000,000 INR
	{ name: "BAMS/BHM Sg/Pharmacy", value: 6000000 }, // 6,000,000 INR
	{ name: "B.Architecture", value: 4000000 }, // 4,000,000 INR
	{ name: "HMCT Degree", value: 2000000 } // 2,000,000 INR
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28"];

const ScholarshipDistributionChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Scholarship Distribution by Category</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={scholarshipData}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{scholarshipData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default ScholarshipDistributionChart;
