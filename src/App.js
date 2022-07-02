import Card from './components/Card.jsx'
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
const url = "https://randomuser.me/api/"

function App() {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUser =async ()=> {
   
    try {
       const user = await axios.get(url);
    setData(user.data.results)
    isLoading(false)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => { getUser()  }, []);
  if (loading) {
    return (<h1> Loading...</h1>)
  }
  
  
 
  return (
    <div className="container">
      <Card data={data[0]} getUser={getUser} />
    </div>
  );
}

export default App;
