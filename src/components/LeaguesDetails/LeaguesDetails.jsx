import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LeaguesDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

const LeaguesDetails = (props) => {
    const [badge, setBadge] = useState([])
    const {strLeague, strSport, idLeague,  } = props.league;
    const {strBadge} = badge;
    const history = useHistory();
    const handleClick = (id)=>{
            const url = `details/${id}`;
            history.push(url);
            }
            // console.log(history);

            

            useEffect(()=>{
                fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
                .then(res =>res.json())
                .then(data => setBadge(data.leagues[0]))
            },[idLeague]);

    return (
        <div>
            <div className="card">
                
                <img className="card-img-top w-75 mx-auto my-3" src={strBadge} alt="Card cap"/>
                
                <div className="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Sports Type: {strSport} </p>
                    
                    <button className="btn btn-primary" onClick={()=>handleClick(idLeague)} > Explore <FontAwesomeIcon icon={faLongArrowAltRight} /> </button>
                
                </div>
            </div>
        </div>
    );
};

export default LeaguesDetails;