import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('data.json');
      const data = await res.json();
      setData(data);
    }
    loadData();
  }, [])
  // console.log(data)

  return (
    <>
      <h1 className='text-4xl font-semibold'>Users API</h1>
      <div className='grid grid-cols-3 gap-6'>
        {
          data.map(users => <Card data={users} key={users._id}></Card>)

        }
      </div>
    </>
  );
}


export default App
