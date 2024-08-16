import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Center from './Center';
import End from './End';
import axios from 'axios';

const Navbar = ({theme}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZ2F1cmF2dGFraGk2OEBnbWFpbC5jb20iLCJpZCI6MTAyNywiZmlyc3ROYW1lIjoiR2F1cmF2IiwibGFzdE5hbWUiOiJDU0UifSwiaWF0IjoxNzIzNzE0MjA1LCJleHAiOjE3NTUyNTAyMDV9.VKr_LbtBuoYAK6lYPPW9TGJJN5kliQmvfy8NfMXbX1U';
      const url = 'https://hiring.reachinbox.xyz/api/v1/onebox/list';

      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
 
 

  return <>
  <div className='mainto' id={`${!theme?"WHITE":""}`}>
    <Sidebar theme={theme}  value={data.data}/>
    <Center theme={theme} value={data.data[0]}/>
    <End  theme={theme}/>
  </div>
  
 </>
};

export default Navbar;




