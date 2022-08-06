import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import StylishCard from './card';
import BasicPagination from './pagination';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  gridList: {
     height:850 
    //minWidth: 800,
    //width!
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function TitlebarGridList(props) {
  const { classes } = props;
  const [players,setPlayers] = useState([])
  //const playersInStore = useSelector(state=>state.playerReducer);

  useEffect(()=>{
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      } 
    const fetchData = async () => {
        const response = await fetch(process.env.REACT_APP_SERVER+'players',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'} });
            const players = await response.json()   
        // waits for 1000ms
        await sleep(1000);
        return players;
      };
    fetchData().then( players => 
    {
     setPlayers(players.results); console.log('pl',players)}).catch(()=> setPlayers([]))
         
    
  },[])
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {players.map(player => (
          <StylishCard playerInfo = {player} />
        ))}
      </GridList>
      <BasicPagination />
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
