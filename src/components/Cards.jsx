import React, { useState } from 'react';

export default function VehicleCard({ vehicleId = '' }) {
  const [kilometers, setKilometers] = useState(0);
  const [hours, setHours] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <div style={{ backgroundColor: '', borderRadius: '1rem', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '18rem', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '0.5rem', padding: '0.25rem 0.5rem', width: '100%' }}>
          <select
            style={{ flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent' }}
            value={vehicleId}
            onChange={() => {}}
          >
            <option value="OD16G3462">OD16G3462</option>
            <option value="OD16G3461">OD16G3461</option>
          </select>
          <span style={{ fontSize: '0.8rem' }}>▼</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '500' }}>Kilo Meters</label>
          <input
            type="number"
            style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
          />
        </div>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '500' }}>Hours Meters</label>
          <input
            type="number"
            style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '500' }}>Quantity</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              style={{ padding: '0.25rem 0.5rem', border: '1px solid #ccc', borderTopLeftRadius: '0.375rem', borderBottomLeftRadius: '0.375rem', backgroundColor: '#f9fafb' }}
            >
              –
            </button>
            <input
              type="number"
              style={{ width: '3rem', textAlign: 'center', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              style={{ padding: '0.25rem 0.5rem', border: '1px solid #ccc', borderTopRightRadius: '0.375rem', borderBottomRightRadius: '0.375rem', backgroundColor: '#f9fafb' }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
