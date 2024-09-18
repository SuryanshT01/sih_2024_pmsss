import { motion } from "framer-motion";
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	Tooltip,
} from "recharts";

// Updated data for scholarship segmentation
const scholarshipSegmentationData = [
	{ subject: "Application Quality", A: 120, B: 110, fullMark: 150 },
	{ subject: "Verification Speed", A: 98, B: 130, fullMark: 150 },
	{ subject: "Approval Rate", A: 86, B: 130, fullMark: 150 },
	{ subject: "Document Accuracy", A: 99, B: 100, fullMark: 150 },
	{ subject: "Review Frequency", A: 85, B: 90, fullMark: 150 },
	{ subject: "Applicant Recency", A: 65, B: 85, fullMark: 150 },
];

const ScholarshipSegmentation = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Scholarship Application Segmentation</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<RadarChart cx='50%' cy='50%' outerRadius='80%' data={scholarshipSegmentationData}>
						<PolarGrid stroke='#374151' />
						<PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9CA3AF' />
						<Radar name='Stream A' dataKey='A' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
						<Radar name='Stream B' dataKey='B' stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
						<Legend />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default ScholarshipSegmentation;
