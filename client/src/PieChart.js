import {Pie} from 'react-chartjs-2';
import { 
    Chart as ChartJs,
    Tooltip,
    Title,
    ArcElement,
    Legend,
} from 'chart.js';
import React, {useState, useEffect} from "react";
ChartJs.register(
    Title,
    Tooltip,
    Legend ,
    ArcElement
);
function PieChart()
{
    const [data, setData] = useState({
        datasets: [],
    })
    useEffect(()=>{
        const fetchData=async()=>{
            const url='http://localhost:3001/chart6'
         fetch (url).then((data)=>{
            const res=data.json();
            return res
            }).then((res)=>{
                console.log("ressss",res)
                const label=[];
                const data=[];
                for (const i of res)
                {
                    label.push("Boys");
                    label.push("Girls");
                    data.push(i.boys);
                    data.push(i.girls);
                 }
                 setData(
                    {
                        datasets:[{
                            data:data,
                            backgroundColor:[
                                'red','blue','yellow','green','orange','pink'
                            ]
                        },
                    ],
                        labels:label,
                    },
                 )
            }).catch(e=>{
                console.log("error",e)
            })
        }
        fetchData();
    },[]);
    return(
        <div align="center">
        <div className="PieChart" style={{width:"30%",height:"30%"}}>
        <h3 className='text-center'>Percentage of no of Boys and Girls Educated under ICCR</h3>
            <Pie data={data}/>
        </div>
        </div>
    );
}
export default PieChart;