import {
  UserCheck,
  UserPlus,
  UsersIcon,
  UserX,
  IndianRupee,
  ArrowDown01,
} from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const userStats = {
	totalUsers: 2890,
	newApplicationsToday: 243,
	activeUsers: 2289,
	churnRate: "20.4%",
};

const UsersPage = () => {
	return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Approved List" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Applications Approved"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="Approved Today"
            icon={UserPlus}
            value={userStats.newApplicationsToday}
            color="#10B981"
          />
          <StatCard
            name="Payments Pending"
            icon={ArrowDown01}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Payment Processed"
            icon={IndianRupee}
            value={userStats.churnRate}
            color="#10B981"
          />
        </motion.div>

        <UsersTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};
export default UsersPage;
