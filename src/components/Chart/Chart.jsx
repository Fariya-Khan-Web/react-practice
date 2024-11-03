import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { "month": "January", "male": 100, "female": 97 },
  { "month": "February", "male": 80, "female": 105 },
  { "month": "March", "male": 100, "female": 115 },
  { "month": "April", "male": 70, "female": 90 },
  { "month": "May", "male": 140, "female": 135 },
  { "month": "June", "male": 50, "female": 145 },
  { "month": "July", "male": 120, "female": 155 },
  { "month": "August", "male": 130, "female": 165 },
  { "month": "September", "male": 180, "female": 15 },
  { "month": "October", "male": 190, "female": 185 },
  { "month": "November", "male": 200, "female": 195 },
  { "month": "December", "male": 210, "female": 295 }
]

const Chart = () => {
  return (

    <div>
      <h1 className='text-5xl font-bold text-white my-10'>New Joinings Throughtout the Months</h1>
      <div >
        <LineChart width={1300} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="male" stroke="#add8e6" />
          <Line type="monotone" dataKey="female" stroke="#FFC0CB" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <h1 className='text-5xl font-bold text-white my-10'>Same Shit but in BARCHART</h1>
      <div>
        
      </div>
    </div>
  )
}

export default Chart 
