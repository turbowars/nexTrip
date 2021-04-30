
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const Home = () => {
  const [directions, setDirections] = useState(null);
  const [stops, setStops] = useState(null);
  const [searchDetails, setSearchDetails] = useState([]);

  //Fetch routes with custom hook
  const { error, data: routes } = useFetch('https://svc.metrotransit.org/NexTrip/Routes');

  const fetchDirections = (e) => {
    setSearchDetails(e.target.value);
    fetch('https://svc.metrotransit.org/NexTrip/Directions/'+e.target.value, {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
      .then(res => {
        if(!res.ok) {
          throw Error('could not fetch directions');
        }
        return res.json();
      })
      .then(data => {
        setDirections(data);
      })
      .catch (err => {
        setError(err.message)
      })
  }

  const fetchStops = (e) => {
    fetch('https://svc.metrotransit.org/NexTrip/Stops/'+searchDetails+'/'+e.target.value, {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
      .then(res => {
        if(!res.ok) {
          throw Error('could not fetch stops');
        }
        return res.json();
      })
      .then(data => {
        setStops(data);
      })
      .catch (err => {
        setError(err.message)
      })
  }




  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
         {error && <div className="alert alert-danger">{error}</div>}   
          {routes && 
            <div class="form-group">
                <label for="exampleInputEmail1">          Choose Route :   </label>
                <select name="routes" onChange= {(e) => fetchDirections(e)}>
                  {routes.map(item => (
                    <option value={ item.Route }>{item.Description }</option>
                      ))}
                </select>
            </div>
          }

          {directions && 
            <div class="form-group">
            <label for="exampleInputEmail1">          Choose Direction :   </label>
        
            <select name="directions" onChange= {(e) => fetchStops(e)}>
              {directions.map(item => (
                <option value={ item.Value }>{item.Text }</option>
                  ))}
            </select> 
            </div>
          }
          {stops && 
          <div className="stops-data mt-5">
            <h1>List of Stops</h1>
            <table class="table table-dark mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Stops</th>
                </tr>
              </thead>
              <tbody>
              {stops.map(item => (
                <tr>
                  <th scope="row">{item.Value}</th>
                  <td>{ item.Text }</td>
                </tr>
              ))}
                
              </tbody>
            </table>
          </div>
          }


          
          


          </div>
        </div>
      </div>
      
    </div>
  );
}
 
export default Home;