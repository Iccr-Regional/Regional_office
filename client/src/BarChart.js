import{
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
}from 'chart.js';
import {Bar} from 'react-chartjs-2';
import React, {useState, useEffect} from "react";
ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend 
);

function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const[chartOptions, setChartOptions]= useState({});
    useEffect(() => {
        setChartData({
            labels: ["Delhi University","Ahemadabad","Bengaluru","Guwahati","Jammu","Kolkata","Lucknow","Mumbai","Patna","Pune","Shillong"],
            datasets: [
                {
                   label:"Total events conducted", 
                   data:[120,150,176,120,220,180,170,190,190,270,190],
                   borderColor:["rgba(53,162,235,1)",
                   "rgba(20,255,130,1)",
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 54, 255, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)',
                   'rgba(245, 0, 0, 1)',
                   'rgba(0,255,255,1)'],
                   backgroundColor:["rgba(53,162,235,0.2)",
                   "rgba(20,255,130,0.2)",
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 54, 255, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)',
                   'rgba(245, 0, 0, 0.2)',
                   "rgba(0,255,225,0.2)",],
                },
            ],
        });
        setChartOptions({
            responsive:true,
            plugins:{
               legend:{
                position:"top"
               },
               title:{
                display:false,
                text:"No of events conducted by respective Regional Office",
               },
            },
        });
    },[]);
    return(
        <div className="container BarChart">
            <div className="row">
                <div className='col-* col-md-12'>
                    <h3 className='text-center'>No of events conducted by respective Regional Office</h3>
                   <Bar options={chartOptions} data={chartData}/>
                </div>
            </div>
          
          </div>
        );
}
export default BarChart;