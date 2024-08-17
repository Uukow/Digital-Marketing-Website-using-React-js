import React, { useEffect, useState } from 'react';
import '../../Styles/home.css';

function Mission() {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        fetch('/Models/vision.json') // Ensure the correct path here
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setMissions(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        
        <div className="services-style-four-area bg-gray default-padding bottom-less">
        <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2 className="title-mission">Vision & Mission</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>
            <div className="container">
            
                <div className="row align-center">
                    {missions.length > 0 ? (
                        missions.map(mission => (
                            <div className="col-lg-6 col-md-6 services-style-four" key={mission.id}>
                                <div className="item">
                                    <div className="thumb">
                                        <img src={mission.image} alt={mission.title} />
                                    </div>
                                    <div className="info">
                                        <h4 className='missTitle'><a href="#">{mission.title}</a></h4>
                                        <p className='missDec'>{mission.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No missions available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mission;
