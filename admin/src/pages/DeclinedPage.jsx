import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle, Package, TrendingDown, CheckCircle } from "lucide-react"; // Using AlertTriangle
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";

const DeclinedPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Declined Applications' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Applications Declined' icon={Package} value={450} color='#6366F1' />
					<StatCard name='Applications Declined Today' icon={TrendingDown} value={12} color='#10B981' />
					<StatCard name='Applications Reviewed' icon={CheckCircle} value={320} color='#F59E0B' />
					<StatCard name='Applications Declined (Till Date)' icon={AlertTriangle} value={"450"} color='#EF4444' /> {/* Changed icon to AlertTriangle */}
				</motion.div>

				<ProductsTable />

				{/* CHARTS */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default DeclinedPage;
