
import { useEffect,useState } from "react";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function PieChart(){
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
                 backgroundColor:[
                  '#7CFC00',
                  '#32CD32',
                  '#ADFF2F',
                  '#2E8B57',
                  '#d8aafa',
                  '#faaacf',
                ]
               },{
                label: 'Number of Lines',
                data:dataSet2,
                backgroundColor:[
                 '#00BFFF',
                 '#4682B4',
                 '#aaacfa',
                 '#aafaf7',
                 '#8A2BE2',
                 '#faaacf',
               ]
              },

             ],

           })
         console.log("arrData", dataSet1)

      }).catch(e => {

             console.log("error", e)

         })
        }
         fetchData();
        }, [])


  return (
      <Doughnut data={data}/>
    
    );

}

export default PieChart;
 