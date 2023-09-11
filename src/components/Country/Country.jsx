import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
      const { name, flags, population, area, cca3 } = country;

      const [visited, setVisited] = useState(false);
      const handleVisited = () => {
            setVisited(!visited);
      };
      // console.log(handleVisitedCountry);




      return (
            <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
                  <h3 style={{ color: visited ? 'purple' : 'white' }}>{name.common}</h3>
                  <img src={flags.png} alt="" />
                  <p>population : {population}</p>
                  <p>area : {area}</p>
                  <p><small>code :{cca3}</small></p>
                  <button onClick={handleVisited}> {visited ? 'visited' : 'Going'}</button>
                  <br />
                  <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
                  <br />
                  <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
                  {visited ? 'I have visited this country.' : 'I want to visite'}

            </div >
      );
};

export default Country;