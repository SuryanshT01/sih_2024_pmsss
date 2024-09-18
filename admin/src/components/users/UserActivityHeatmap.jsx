import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const userActivityData = [
	{ name: "Week-1", "0-50k": 55, "50k-1L": 20, "1L-2L":40, "2L-3L": 15, "16-20": 100, "20-24": 30 },
	{ name: "Week-2", "0-50k": 30, "50k-1L": 50, "1L-2L": 70, "2L-3L": 90, "16-20": 110, "20-24": 40 },
	{ name: "Week-3", "0-50k": 40, "50k-1L": 60, "1L-2L": 80, "2L-3L": 100, "16-20": 120, "20-24": 50 },
	{ name: "Week-4", "0-50k": 50, "50k-1L": 70, "1L-2L": 90, "2L-3L": 110, "16-20": 130, "20-24": 60 },
	{ name: "Week-5", "0-50k": 60, "50k-1L": 80, "1L-2L": 100, "2L-3L": 120, "16-20": 140, "20-24": 70 },
];

const UserActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>
				Processed Payments Heatmap (Weekwise)</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={userActivityData}>
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
						<Bar dataKey='0-50k' stackId='a' fill='#6366F1' />
						<Bar dataKey='50k-1L' stackId='a' fill='#8B5CF6' />
						<Bar dataKey='1L-2L' stackId='a' fill='#EC4899' />
						<Bar dataKey='2L-3L' stackId='a' fill='#10B981' />
						<Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
						<Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserActivityHeatmap;
