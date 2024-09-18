import { motion } from "framer-motion";
import { Edit, Search, Trash2, Eye, CheckCheck } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  {
    id: 1,
    applicationid: "PMSS180924100",
    category: "Engineering",
    fees: 130000,
    submissionDate: "19-08-2024",
    sales: 1200,
  },
  {
    id: 2,
    applicationid: "PMSS180924101",
    category: "Medical",
    fees: 250000,
    submissionDate: "21-08-2024",
    sales: 800,
  },
  {
    id: 3,
    applicationid: "PMSS180924102",
    category: "General",
    fees: 90000,
    submissionDate: "22-08-2024",
    sales: 650,
  },
  // General:30000, Engineering:125,000, Medical:3,00,000
  {
    id: 4,
    applicationid: "PMSS190924103",
    category: "Engineering",
    fees: 120000,
    submissionDate: "26-08-2024",
    sales: 950,
  },
  {
    id: 5,
    applicationid: "PMSS210924104",
    category: "Engineering",
    fees: 210000,
    submissionDate: "27-08-2024",
    sales: 720,
  },
  {
    id: 6,
    applicationid: "PMSS220924105",
    category: "General",
    fees: 70000,
    submissionDate: "19-09-2024",
    sales: 720,
  },
  {
    id: 7,
    applicationid: "PMSS230924106",
    category: "Medical",
    fees: 380000,
    submissionDate: "19-08-2024",
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.applicationid.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Applications List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Application ID..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Course Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Course Fees
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Submission Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Review
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  {/* <img
                    src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                    alt="Product img"
                    className="size-10 rounded-full"
                  /> */}
                  {product.applicationid}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ₹ {product.fees.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                  {product.submissionDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 items-center">
                  <button
                    className="text-indigo-400 hover:text-indigo-300 mr-2 flex justify-center items-center"
                    title="Click to See Detals"
                  >
                    <div>
                      <Eye size={16} />
                    </div>
                    <span>&nbsp; View</span>
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex justify-around">
                  <button
                    className="text-indigo-400 hover:text-indigo-300 mr-2"
                    title="Click to Approve"
                  >
                    <CheckCheck size={22} />
                  </button>
                  <button
                    className="text-red-400 hover:text-red-300"
                    title="Click to Reject"
                  >
                    <Trash2 size={18} />
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
export default ProductsTable;
