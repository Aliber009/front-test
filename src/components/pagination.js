import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';

const useStyles = makeStyles({

    root: {
          color: 'white',
        },
     });


export default function BasicPagination() {
 const playersData =   useSelector(state=>state.playerReducer);
 const [player,setPlayer] = React.useState([]); 
 console.log('dataaaa',playersData);

 const changePage = async(pagenumber)=>{
    const response = await fetch(process.env.REACT_APP_SERVER+'players?page='+pagenumber,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'} });
        const players = await response.json()
        return players ;    
 }

 const classStyle = useStyles()
  return (
    <Stack spacing={2}>
      <Pagination className={classStyle} count={playersData.pageInfo.totalPages || 0} color="secondary" onChange={changePage} />
    </Stack>
  );
}