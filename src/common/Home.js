
import { useEffect, useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  const [routes, setRoutes] = useState([]);
  const [directions, setDirections] = useState([]);
  const [stops, setStops] = useState(null);
  const fetchDirections = (e) => {
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



  useEffect(() => {
    console.log('Ran on route update');
  },[routes])

  useEffect(() => {
    console.log('ran on direction upd');
  },[directions])

  useEffect(() => {
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
  }, [])

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-8 text-center">

          <select name="routes" onChange= {(e) => fetchDirections(e)}>
          {routes.map(item => (
            <option value={ item.Route }>{item.Description }</option>
              ))}
          </select>
          
      Choose direction
      
      <select name="directions">
          {directions.map(item => (
            <option value={ item.Value }>{item.Text }</option>
              ))}
          </select> Choose Stops

          </div>
        </div>
      </div>
      
    </div>
  );
}
 
export default Home;