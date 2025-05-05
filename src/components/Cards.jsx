import React, { useState, useEffect } from 'react';
import './Cards.css';

export default function Cards({
  RegistrationNo = '',
  kilometers = 0,
  hours = 0,
  quantity = 0,
  vehicleList = [],
  onDelete
}) {
  const [selectedVehicle, setSelectedVehicle] = useState(RegistrationNo);
  const [kmValue, setKmValue] = useState(kilometers);
  const [hourValue, setHourValue] = useState(hours);
  const [qtyValue, setQtyValue] = useState(quantity);

  useEffect(() => {
    setSelectedVehicle(RegistrationNo);
    setKmValue(kilometers);
    setHourValue(hours);
    setQtyValue(quantity);
  }, [RegistrationNo, kilometers, hours, quantity]);

  return (
    <div className=''>
      <div className="card-container">
        <div className="card-header">
          <div className="card-select-wrapper">
            <select
              className="card-select"
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
            >
              {vehicleList.length > 0 ? (
                <>
                  <option value="">Select Vehicle</option>
                  {vehicleList.map((vehicle) => (
                    <option key={vehicle._id} value={vehicle.sRegistrationNo}>
                      {vehicle.sRegistrationNo}
                    </option>
                  ))}
                </>
              ) : (
                <option value={RegistrationNo}>{RegistrationNo}</option>
              )}
            </select>
          </div>
          <button className="" onClick={onDelete}>🗑️</button>
        </div>
        <div className="card-body">
          <div>
            <label className="card-label">Kilo Meters</label>
            <input
              type="number"
              className="card-input"
              value={kmValue}
              onChange={(e) => setKmValue(Math.max(0,e.target.value))}
            />
          </div>
          <div>
            <label className="card-label">Hours Meters</label>
            <input
              type="number"
              className="card-input"
              value={hourValue}
              onChange={(e) => setHourValue(Math.max(0,e.target.value))}
            />
          </div>
          <div>
            <label className="card-label">Quantity</label>
            <div className="card-quantity">
              <button
                className="card-button card-button-left"
                onClick={() => setQtyValue(Math.max(0, qtyValue - 1))}
              >
                –
              </button>
              <input
                type="number"
                className="card-quantity-input"
                value={qtyValue}
                onChange={(e) => setQtyValue(Number(e.target.value))}
              />
              <button
                className="card-button card-button-right"
                onClick={() => setQtyValue(qtyValue + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
