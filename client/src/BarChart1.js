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

function BarChart1() {

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const[chartOptions, setChartOptions]= useState({});
    useEffect(() => {
        setChartData({
            labels: ["2018","2019","2020","2021","2022"],
            datasets: [
                {
                   label:["Girls Participated"], 
                   data:[45,55,70,85,87],
                   borderColor:["rgba(20,255,130,1)"],
                   backgroundColor:[ "rgba(255,99,132,1)"],
                },
                {
                label:["Boys Participated"], 
                   data:[50,55,60,50,66],
                   borderColor:["rgba(0,0,255,1)"],
                   backgroundColor:["rgba(53,162,235,1)"]
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
                text:"No.of boys participated",
               },
            },
        });
    },[]);
    return(
        <div className="container BarChart1">
            <div className="row">
                <div className='col-*  col-md-12'>
                    <h3 className='text-center'>No.of students participated in a year</h3>
                   <Bar options={chartOptions} data={chartData}/>
                </div>
            </div>
          </div>
        );
}
export default BarChart1;