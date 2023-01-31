
import { useEffect,useState } from "react";
import {Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJs.register(
    LineElement, 
    CategoryScale,
    LinearScale, 
    PointElement
);

function LineChart(){
  const [data, setData] = useState({
    datasets: [{
      data: [0,0,0,0],
        backgroundColor:[
          'red',
          'blue',
          'yellow',
          'green'
        ]
    },
  ],
  labels: [
    '0',
    '0',
    '0',
    '0'
],
});


const options ={

    plugins:{
        legend: true
    },
    
}

  useEffect(()=> {
    const fetchData= async()=> {
        const url = 'http://localhost:3001/tb'
        const dataSet1 = [];
        const dataSet2 = [];
        const label=[];
      await fetch(url).then((data)=> {
          console.log("Api data", data)
          const res = data.json();
          return res
      }).then((res) => {
          console.log("ressss", res)
         for (const val of res) {
             dataSet1.push(val.ckt);
             label.push(val.voltagelevel);
             dataSet2.push(val.nolines);
         }

         setData({
             labels:label,
             datasets: [
               {
                 label: 'Total Circuit KM',
                 data:dataSet1,
                 backgroundColor: '#ff0000',
                 borderColor: '#ff4500',
                 pointBorderColor: '#ff0000',
                 tension : 0.4

               },{
                label: 'Number of Lines',
                data:dataSet2,
                backgroundColor: '#1e90ff',
                 borderColor: '#1e90ff',
                 pointBorderColor: '#87ceeb',
                 tension : 0.4
               }]

           })
         console.log("arrData", dataSet1)

      }).catch(e => {

             console.log("error", e)

         })
        }
         fetchData();
        }, [])


  return (
      <Line data={data} options={options}/>
    
    );

}

export default LineChart;
 