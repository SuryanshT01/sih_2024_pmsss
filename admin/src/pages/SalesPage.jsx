import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const scholarshipStats = {
	totalScholarshipAmount: "₹4,50,00,000", // Example value in INR
	averageScholarshipApprovedPerWeek: "₹90,000", // Example value in INR
	conversionRate: "85.4%",
	totalScholarshipApprovedPercent: "75%",
};

const SalesPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Finance Tracker Dashboard' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* SCHOLARSHIP STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Scholarship Amount'
						icon={DollarSign}
						value={scholarshipStats.totalScholarshipAmount}
						color='#6366F1'
					/>
					<StatCard
						name='Avg. Scholarship Approved per Week'
						icon={ShoppingCart}
						value={scholarshipStats.averageScholarshipApprovedPerWeek}
						color='#10B981'
					/>
					<StatCard
						name='Conversion Rate'
						icon={TrendingUp}
						value={scholarshipStats.conversionRate}
						color='#F59E0B'
					/>
					<StatCard
						name='Total Scholarship Approved (%)'
						icon={CreditCard}
						value={scholarshipStats.totalScholarshipApprovedPercent}
						color='#EF4444'
					/>
				</motion.div>

				<SalesOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>
			</main>
		</div>
	);
};
export default SalesPage;
