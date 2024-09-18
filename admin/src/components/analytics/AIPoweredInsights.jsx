import { motion } from "framer-motion";
import { TrendingUp, Users, ClipboardList, DollarSign } from "lucide-react";

// Updated insights for the scholarship dashboard
const INSIGHTS = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		insight: "Scholarship approvals have increased by 12% this month due to streamlined verification processes.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "Student engagement has improved by 10% after the launch of real-time application tracking.",
	},
	{
		icon: ClipboardList,
		color: "text-purple-500",
		insight: "Document accuracy has improved across all streams, reducing rejections by 8%.",
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		insight: "Budget optimization strategies indicate a potential 5% increase in scholarships approved without exceeding the allocated fund.",
	},
];

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))} 
			</div>
		</motion.div>
	);
};

export default AIPoweredInsights;
