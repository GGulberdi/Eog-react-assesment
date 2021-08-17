




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducer';
import { Provider, createClient, useQuery } from 'urql';
import { useGeolocation } from 'react-use';
import LinearProgress from '@material-ui/core/LinearProgress';
import  Select from '@material-ui/core/Select';
import  MenuItem from '@material-ui/core/MenuItem';
import  FormControl from '@material-ui/core/FormControl';
import  InputLabel from '@material-ui/core/InputLabel';


import Chip from '../../components/Chip';
import { IState } from '../../store';


const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

const queryMetric = `
query{
  getMetrics 
}
 `;
// console.log(queryMetric)

export default () => {
  return (
    <Provider value={client}>
      <Weather />
    </Provider>
  );
};

const Weather = () => {
  
  const [result] = useQuery({
    query: queryMetric,
  });

  const handleClick=()=>{
    console.log('clicked')
  }

  const handleDelete=()=>{
    console.log('deleted')
  }
  
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
    <p></p>
    <Chip
        // icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
        variant="outlined"
      />
    <FormControl>
    <InputLabel  style={{color:'white'}}>List</InputLabel>
    <Select  style={{color:'white'}}>
      {data.getMetrics.map((item:any, key:any)=> (
  <MenuItem value={item}>{item}</MenuItem>
     ))}
    </Select>
    </FormControl>
</>
  );
};
