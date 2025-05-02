import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards';

function App() {
  const [data, setData] = useState([]);
  const [vechilelist, setVechileList] = useState([]);
  const [extraCards, setExtraCards] = useState([]);

  const API = "http://13.126.247.210:9137/api/hsd/list/v1?date=2025-04-25";

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E1YjQwN2I0OTJkZTliYjZmMmM1NmYiLCJpYXQiOjE3NDYwMDE1OTgsImV4cCI6MTc0ODU5MzU5OH0.XZoe1vQSen3ka4XAAj58xWfPjGxS1jlhI19wJDxMFY0";

  const vechileApi = "http://13.126.247.210:9137/api/vehicle/active-list/v1";

  const CallApi = async () => {
    try {
      const res = await axios.get(API, {
        headers: {
          Authorization: `${token}`
        }
      });
      setData(res?.data?.data);
    } catch (error) {
      console.log(error.response?.status);
    }
  };

  const fetchVechileApi = async () => {
    try {
      const res = await axios.get(vechileApi, {
        headers: {
          Authorization: `${token}`
        }
      });
      setVechileList(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CallApi();
    fetchVechileApi();
  }, []);

  const handleCreateCard = () => {
    setExtraCards([...extraCards, {
      sRegistrationNo: '',
      nKiloMeter: 0,
      nHourMeter: 0,
      nQuantity: 0,
    }]);
  };

  return (
    <>
      <button onClick={handleCreateCard}>
        Create
      </button>

      <div className='main'>
        {data?.length === 0 ? (
          <p>Loading data...</p>
        ) : (
          data?.map((item, index) => (
            <Cards
              key={item?.iVehicleId || index}
              RegistrationNo={item?.oVehicle?.sRegistrationNo}
              kilometers={item?.nKiloMeter}
              hours={item?.nHourMeter}
              quantity={item?.nQuantity}
            />
          ))
        )}

        {extraCards.map((card, index) => (
          <Cards
            key={`extra-${index}`}
            vehicleList={vechilelist}
            RegistrationNo={card.sRegistrationNo}
            kilometers={card.nKiloMeter}
            hours={card.nHourMeter}
            quantity={card.nQuantity}
          />
        ))}
      </div>
    </>
  );
}

export default App;
