import axios from 'axios'
import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const MainPages = () => {
  const [data, setData] = useState(null)
  axios
    .get(`https://testpsyedu.limsa.uz/api/statistics/user/ce06e76f-c962-4acc-bd81-b93992bb87d3`)
    .then((res) => {
      setData(res)
    })
    .catch((err) => console.log('malumotlar yoq yoki topilmadi', err))
  console.log(data)
  return (
    <div className="bg-[#1f1f2f] p-6 rounded-xl w-full h-[450px] mb-15">
      <h2 className="text-white text-center mb-4 text-lg font-semibold">
        Statistikalar Chart ko'rinishda
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" domain={[0, 100]} />
          <Tooltip />
          <Legend verticalAlign="bottom" />
          <Bar dataKey="boshlangich" fill="#8884d8" name="Boshlangich %" />
          <Bar dataKey="yakuniy" fill="#82ca9d" name="Yakuniy %" />
          <Bar dataKey="natija" fill="#ffc658" name="Natija %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MainPages
