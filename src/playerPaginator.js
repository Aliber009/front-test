import { useEffect } from "react";
import { playerActions } from "./store/players";
import { useDispatch } from "react-redux"
const FetchPlayers = () => {

const dispatch = useDispatch()
 useEffect( () => {
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
            dispatch(playerActions.setPlayers(players))
           }).catch(()=>playerActions.setPlayers([]))
         
  },[])
  return null
}
export default FetchPlayers