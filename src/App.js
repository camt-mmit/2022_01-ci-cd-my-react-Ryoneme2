import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:8081/data');
        setData(res.data.data);
        console.log(res.data.data);
      } catch (e) {
        console.error(e);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading</p>;

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src='/large_thumbnail-removebg-preview.png'
          className='App-logo'
          alt='logo'
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        {data.map((v) => {
          console.log(v);
          return <p key={v}>{v}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
