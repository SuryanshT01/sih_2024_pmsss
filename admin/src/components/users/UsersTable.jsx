import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
  {
    id: 1,
    applicationid: "PMSS180924100",
    sanctionedAmount: 125000,
    docVerificationStatus: "Verified",
    submissionDate: "19-08-2024",
  },
  {
    id: 2,
    applicationid: "PMSS180924101",
    sanctionedAmount: 250000,
    docVerificationStatus: "Verified",
    submissionDate: "21-08-2024",
  },
  {
    id: 3,
    applicationid: "PMSS180924102",
    sanctionedAmount: 30000,
    docVerificationStatus: "Verified",
    submissionDate: "22-08-2024",
  },
  {
    id: 4,
    applicationid: "PMSS190924103",
    sanctionedAmount: 120000,
    docVerificationStatus: "Verified",
    submissionDate: "26-08-2024",
  },
  {
    id: 5,
    applicationid: "PMSS210924104",
    sanctionedAmount: 125000,
    docVerificationStatus: "Verified",
    submissionDate: "27-08-2024",
  },
  {
    id: 5,
    applicationid: "PMSS210924105",
    sanctionedAmount: 30000,
    docVerificationStatus: "Verified",
    submissionDate: "19-09-2024",
  },
];

const UsersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(userData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = userData.filter(
			(user) => user.applicationid.toLowerCase().includes(term) || user.sanctionedAmount.toLowerCase().includes(term)
		);
		setFilteredUsers(filtered);
	};

	return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Approved Applications List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Applications..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Application ID
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Approved Amount
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Document Status
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Submission Date
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex text-left">
                    {/* <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.applicationid.charAt(0)}
                      </div>
                    </div> */}
                    <div className="ml-4 text-left">
                      <div className="text-sm font-medium  text-gray-100  text-center ">
                        {user.applicationid}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300 text-center">
                    {user.sanctionedAmount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100 text-center">
                    {user.docVerificationStatus}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-center ${
                      user.submissionDate === "Processed"
                        ? "bg-green-800 text-green-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {user.submissionDate}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                  <button className="px-2 py-1 text-white-400 hover:text-indigo-300 mr-2 rounded-full bg-green-800  "
                  title="Click to Process Payment"
                  >
                    Process Payment
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default UsersTable;
