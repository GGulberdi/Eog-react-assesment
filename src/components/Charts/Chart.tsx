import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const Chart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Multi Axis Line Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/MultiAxisLine.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Line translate='any' data={data} options={options} />
  </>
);

// export default Chart;
// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)',
//       yAxisID: 'y-axis-1',
//     },
//     {
//       label: '# of No Votes',
//       data: [1, 2, 1, 1, 2, 2],
//       fill: false,
//       backgroundColor: 'rgb(54, 162, 235)',
//       borderColor: 'rgba(54, 162, 235, 0.2)',
//       yAxisID: 'y-axis-2',
//     },
//   ],
// };

// const options = {
//   scales: {
//     yAxes: [
//       {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         id: 'y-axis-1',
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-2',
//         gridLines: {
//           drawOnArea: false,
//         },
//       },
//     ],
//   },
// };

// const Chart = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>Multi Axis Line Chart</h1>
//       <div className='links'>
//         <a
//           className='btn btn-gh'
//           href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/MultiAxisLine.js'
//         >
//           Github Source
//         </a>
//       </div>
//     </div>
//     <Line data={data} options={options} />
//   </>
// );



export default Chart;

// import React,{useState, useEffect} from 'react';
// import { Line } from 'react-chartjs-2';
// import { createTheme } from '@material-ui/core/styles'




// function Chart () {
//   const [xTime, setXtime] = useState<Array<string>>(['']);
//   // const [xTime, setXtime] = useState<string>('21:30');


//   useEffect(() => {
//     let dateVal = new Date();
//     let timeVal = dateVal.toLocaleTimeString();
  
  
//   },[])
  

// let arr:any=[]
// let setTime= setInterval(arr.push('hello'), 1000)
// // console.log(setTime)

// var random = Math.floor(Math.random() * 210); 
// // console.log(random)

// const data = {
//   labels: xTime,
//   datasets: [
//     {
//       label: 'tubingPressure',
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)',
//       yAxisID: 'y-axis-1',
//     },
//     {
//       label: 'oilTemp',
//       data: [random*3, random*4, random*1],
//       fill: false,
//       backgroundColor: 'yellow',
//       borderColor: 'rgba(44, 162, 135, 0.2)',
//       yAxisID: 'y-axis-2',
//     },
//     {
//       label: 'waterTemp',
//       data: [random, random+1, random+2],
//       fill: false,
//       backgroundColor: 
//       'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(153, 102, 255, 0.2)',
//       yAxisID: 'y-axis-3',
//     },
//     {
//       label: 'casingPressure',
//       data: [random/2],
//       fill: false,
//       backgroundColor:'rgba(54, 162, 235, 0.2)',
//             borderColor: 'rgba(255, 206, 86, 1)',
//       yAxisID: 'y-axis-4',
//     },
//     {
//       label: 'injValveOpen',
//       data: [random+20],
//       fill: false,
//       backgroundColor:  'rgba(255, 206, 86, 0.2)',
//       borderColor:  'rgba(153, 182, 255, 1)',
//       yAxisID: 'y-axis-5',
//     },
//     {
//       label: 'flareTemp',
//       data: [random*2.5, 78, 49,100],
//       fill: false,
//       backgroundColor:  'rgba(75, 192, 192, 0.2)',
//       borderColor:  'rgba(255, 159, 64, 1)',
//       yAxisID: 'y-axis-6',
//     },
//   ],
// };

// const options = {
//   scales: {
//     xAxes: [{
//       gridLines: {
//          display: false
//       },
//       ticks:{
// display:false
//       }

//    }],
//     yAxes: [
//       {
//         gridLines: {
//           display: false
//         }
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         id: 'y-axis-1',
//         beginAtZero:false
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-2',
//         beginAtZero:false
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-3',
//         beginAtZero:false
//       },{
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-4',
//         beginAtZero:false
//       },{
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-5',
//         beginAtZero:false
//       },{
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-6',
//         beginAtZero:false
//       },
//     ],
//   },
// };



//   return(
//   <>
//     <Line translate='any' data={data} 
//     options={options}
//      />
//   </>
//   )
// };

// export default Chart;

