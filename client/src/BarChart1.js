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
 const ChartOptions={
    indexAxis:'x',
    elements:{
        bar:{
            borderWidth:2,
        },
    },
    responsive:true,
    plugins:{
       legend:{
        position:"top"
       },
       title:{
        display:false,
        text:"No.of students participated",
       },
    },
};

function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    useEffect(() => {
        const fetchData=async()=>{
            const url='http://localhost:3001/chart2'
            const dataSet1=[];
            const dataSet2=[];
            const dataSet3=[];
         fetch (url).then((data)=>{
            console.log("Api data",data)
            const res=data.json();
            return res
            }).then((res)=>{
                console.log("ressss",res)
                for (const val of res)
                {
                    dataSet1.push(val.year);
                    dataSet2.push(val.boys)
                    dataSet3.push(val.girls)
                }
        setChartData({
            labels:dataSet1,
            datasets: [
                {
                   label:["Girls Participated"], 
                   data:dataSet3,
                   borderColor:['rgba(255, 99,132,1)'],
                   backgroundColor:['rgba(255, 99, 132, 0.5)',],
                },
                {
                label:["Boys Participated"], 
                   data:dataSet2,
                   borderColor:["rgba(53,162,235,1)"],
                   backgroundColor:["rgba(53,162,235,0.5)"]
                },
            ],
        })
        console.log("arrData",dataSet1,dataSet2,dataSet3)
            }).catch(e=>{
                console.log("error",e)
            })
        }
        fetchData();
    },[]);
    return(
        <div className="BarChart container">
            <div className='row'>
                <div className='col-* col-md-12'>
                <h3 className='text-center'>No.of students participated in a year</h3>
          <     Bar options={ChartOptions} data={chartData}/>
                </div>
            </div>
           
          </div>
        );
}
export default BarChart;