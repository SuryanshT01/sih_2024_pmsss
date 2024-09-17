import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'week1',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week2',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week3',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week4',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week5',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week6',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week7',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week8',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week9',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week10',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week11',
    applications: Math.floor(Math.random() * 200) + 50,
  },
  {
    name: 'week12',
    applications: Math.floor(Math.random() * 200) + 50,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar
          dataKey='applications'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
