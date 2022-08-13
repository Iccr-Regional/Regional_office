import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis} from 'recharts';


const Bchart = () => {

// Sample data
const data = [
{name: 'Delhi University', students: 400},
{name: 'Ahemadabad', students: 700 },
{name: 'Bengaluru', students: 200},
{name: 'Guwahati', students: 100},
{name: 'Jammu', students: 170},
{name: 'Kolkata', students: 300},
{name: 'Lucknow', students: 700},
{name: 'Mumbai', students: 750},
{name: 'Patna', students: 900},
{name: 'Pune', students: 190},
{name: 'Shillong', students: 770}

];
return (
    <div className='p-3'>
        <BarChart width={1180} height={500} data={data} >
	        <Bar dataKey="students" fill="orange"/>
	        <CartesianGrid stroke="#cc"/>
	        <XAxis dataKey="name" />
	        <YAxis />
        </BarChart>
    </div>

);
}


export default Bchart;