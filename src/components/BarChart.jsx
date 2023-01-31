import { Box } from '@mui/material';
import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    axis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: { x: { title: { display: true, text: 'Voltage Level' }}},
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
        display: true
      },
    },
  };

  // const options2 = {
  //   axis: 'x',
  //   elements: {
  //     bar: {
  //       borderWidth: 2,
  //     },
  //   },
  //   scales: {x: { title: { display: true, text: 'Voltage Level' }}, y: { title: { display: true, text: 'Number of Lines' }}},
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //       display: true
  //     },
  //   },
  // };



const BarChart =() => {
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


      // const [data2, setData2] = useState({
      //   datasets: [
      //     {
      //       label: 'Dataset 2',
      //       data:[],
      //       borderColor: 'rgb(258, 199, 132)',
      //       backgroundColor: 'rgba(25, 190, 130)',

      //     },

        
      //   ],

      // });

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
                label: 'Circuit KM',
                data:dataSet1,
                borderColor: 'rgb(258, 199, 132)',
                backgroundColor: 'rgba(25, 190, 130)',
                size:4,
                padding:1,
              },
              {
                label: 'No. of Lines',
                data:dataSet2,
                borderColor: 'rgb(258, 199, 132)',
                backgroundColor: 'rgba(255, 92, 185,1)',
                size:4,
                padding:1,
              },
            ],
          })
        console.log("arrData", dataSet2)
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
  gridColumn="span 10"
  display="flex"
  alignItems="center"
  justifyContent="center"

>
<Bar data={data} options={options}/>
   
  </Box>
      {/* <Box

          gridColumn="span 6"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Bar data={data2} options={options2}/>
      </Box>  */}
      </Box>
       )
  }
export default BarChart;