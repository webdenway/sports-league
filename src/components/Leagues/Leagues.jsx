import React, { useEffect, useState } from 'react';
import LeaguesDetails from '../LeaguesDetails/LeaguesDetails';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0, 250)))
    }, []);
    // console.log(leagues.length)
    return (
        <div  className="container-fluid custom-background">
            <div className="container">
                <div className="row">
                    {leagues.map(league => <div  key ={league.idLeague} className="col-lg-4 col-xl-3 col-md-6 my-3">
                        <LeaguesDetails league={league}></LeaguesDetails>
                    </div>)}
                </div>
            </div>
            
        </div>
    );
};

export default Leagues;