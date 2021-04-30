
import { useEffect, useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  const [routes, setRoutes] = useState([]);
  const [directions, setDirections] = useState(null);
  const [stops, setStops] = useState(null);
  const [searchDetails, setSearchDetails] = useState([]);
  const fetchRoutes = () => {
    fetch('https://svc.metrotransit.org/NexTrip/Routes', {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
      .then(res => {
        return res.json();
      })
      .then(data => {
        setRoutes(data);
      })
  }
  const fetchDirections = (e) => {
    setSearchDetails(e.target.value);
    fetch('https://svc.metrotransit.org/NexTrip/Directions/'+e.target.value, {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
      .then(res => {
        return res.json();
      })
      .then(data => {
        setDirections(data);
      })
  }

  const fetchStops = (e) => {
    fetch('https://svc.metrotransit.org/NexTrip/Stops/'+searchDetails+'/'+e.target.value, {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
      .then(res => {
        return res.json();
      })
      .then(data => {
        setStops(data);
      })
  }



  useEffect(() => {
    console.log('Ran on route update');
  },[routes])

  useEffect(() => {
    console.log('ran on direction upd');
  },[directions])

  useEffect(() => {
    fetchRoutes();
  }, [])

  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
          <div class="form-group">
            <label for="exampleInputEmail1">          Choose Route :   </label>
            <select name="routes" onChange= {(e) => fetchDirections(e)}>
          {routes.map(item => (
            <option value={ item.Route }>{item.Description }</option>
              ))}
          </select>
    </div>

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
            <h1>Show Stops </h1>
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