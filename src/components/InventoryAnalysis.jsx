import { Box } from '@mui/material';
import Header from './Header';
import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,ArcElement,PointElement
  } from 'chart.js';

import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    ArcElement, Legend, PointElement
  );

const options = {
    axis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: { y: { title: { display: true, text: 'cost' }}},
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        display: true
      },
    },
  };


const InventoryAnalysis =() => {
    const [data, setData] = useState({
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: 'rgb(258, 99, 132)',
            backgroundColor: 'rgba(25, 190, 130)',
          },



        ],
      });

    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'http://localhost:3001/dd'
           const dataSet1 = [];
           
           const label=[];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                dataSet1.push(val.in_rs_lakh);
                label.push(val.sr_no);
                
            }console.log(dataSet1)

          setData({
            labels:label,
            datasets: [
              {
                label: "cost",
                data:dataSet1,
                borderColor: 'rgb(258, 199, 132)',
                backgroundColor: [
                '#00BFFF',
                '#4682B4',
                '#aaacfa',
                '#aafaf7',
                '#8A2BE2',
                '#faaacf',
                  ],
                size:4,
                padding:1,
              },
            ],
          })
         }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData();          
    },[])


    return(
      <Box mt='-40' display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="440px"
      gap="10px">

  <Box
  gridColumn="span 12"
  display="flex"
  alignItems="center"
  justifyContent="center"

>
<Bar data={data} options={options}/>

</Box>

<Box height="85vh" m="0 0 20px 20px" 
  gridColumn="span 4"
  display="flex"
  alignItems="center"
  justifyContent="center">

<Doughnut data={data}/>
   
  </Box>

<Box height="85vh" m="0 0 20px 20px" 
  gridColumn="span 8"
  display="flex"
  alignItems="center"
  justifyContent="center">
  <Line data={data} options={options}/>
  </Box>
      </Box>
       )
  }
export default InventoryAnalysis;