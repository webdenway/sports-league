import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LeagueId.css'
import image from '../img/female-team.jpg';
import img from '../img/male-team.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faDotCircle, faFlag, faFutbol, faMarsStroke} from '@fortawesome/free-solid-svg-icons';



const LeagueId = () => {
    const [leagueData, setLeagueData] = useState({});
    // console.log(typeof(leagueData));

    const {strBanner, strSport, strGender, strLeague, intFormedYear, strCountry, strDescriptionEN, strDescriptionFR, strFacebook, strTwitter, strYoutube} = leagueData;

    const {info} = useParams();
    // console.log(info);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${info}`)
        .then(res => res.json())
        .then(data => setLeagueData(data.leagues[0]))
    }, [info]);
    // console.log(leagueData[0]);
    // const {idLeague} = leagueData[0];
    
    return (
        <div>
        
            <header className="banner-container">
                <div className="container pt-3"><img class src={strBanner} alt="" /></div>
            </header>

            <section className="conditional-container">
                
                <div className="container pt-5">

                    <div className="hero-area d-flex flex-sm-column flex-md-row justify-content-around align-items-center ">

                        <div className="text-left  text-light">
                            <h3 className="mb-3">{strLeague}</h3>
                            <h5><FontAwesomeIcon icon={faDotCircle} /> Founded : {intFormedYear}</h5>
                            <h5><FontAwesomeIcon icon={faFlag} /> Country : {strCountry} </h5>
                            <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport} </h5>
                            <h5><FontAwesomeIcon icon={faMarsStroke} /> Gender : {strGender} </h5>
                        </div>

                        <div className="image-area">
                            {strGender==="Male" ? <img className="img-fluid" src={img}  alt="" /> : <img className="img-fluid" src={image}  alt="" /> }
                        </div>

                    </div>
                
                </div>

            </section>

            <section className=" conditional-container pt-5">
                    

                    
                    <div className="d-flex justify-content-center">

                            <div className="container text-light  ">
                            <p>{strDescriptionEN} </p>                     
                            <p>{strDescriptionFR} </p> 

                                           
                            </div>
                    </div>
                        

            </section>
           
            <section class="footer-area">
                <div className="social-icon container mt py-2">
                   <div className = "d-flex border-bottom justify-content-center align-items-center mt-3">
                   <div className="icon-container ">
                        <p><a href={`//${strFacebook}`} target ="_blank" rel='noreferrer'><FontAwesomeIcon icon={faFacebook} /></a></p>
                    </div>
                    <div className="icon-container mx-5">
                        <p><a href={`//${strTwitter}`} target ="_blank" rel='noreferrer'><FontAwesomeIcon icon={faTwitter} /></a></p>
                    </div>
                    <div className="icon-container">
                        <p><a href={`//${strYoutube}`} target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faYoutube} /></a></p>
                    </div>
                   </div>
                </div>
            
            </section>




         
        </div>
    );
};

export default LeagueId;