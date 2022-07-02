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
    return (
     
     <svg
    width="{57}"
    height="{57}"
    viewBox="0 0 57 57"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
  >
    <g fill="none" fillrule="evenodd">
      <g transform="translate(1 1)" strokewidth="{2}">
        <circle cx="{10}" cy="{50}" r="{5}">
          <animate
            attributeName="cy"
            begin="0s"
            dur="2.2s"
            values="50;5;50;50"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            begin="0s"
            dur="2.2s"
            values="5;27;49;5"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="{27}" cy="{5}" r="{5}">
          <animate
            attributeName="cy"
            begin="0s"
            dur="2.2s"
            from="{5}"
            to="{5}"
            values="5;50;50;5"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            begin="0s"
            dur="2.2s"
            from="{27}"
            to="{27}"
            values="27;49;5;27"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="{49}" cy="{50}" r="{5}">
          <animate
            attributeName="cy"
            begin="0s"
            dur="2.2s"
            values="50;50;5;50"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            from="{49}"
            to="{49}"
            begin="0s"
            dur="2.2s"
            values="49;5;27;49"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </g>
  </svg>
  
    
     
    )
  }
  
  
 
  return (
    <div className="container">
      <Card data={data[0]} getUser={getUser} />
    </div>
  );
}

export default App;
