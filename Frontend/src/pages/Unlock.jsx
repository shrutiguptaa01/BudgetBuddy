import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Unlock({ onUnlocked }) {
  const [mpin, setMpin] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    if (mpin.length < 4) return alert('Enter 4-digit MPIN');
    try {
      await api.post('/auth/verify-mpin', { mpin });
      await onUnlocked();
      navigate('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || 'MPIN verify failed');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow-md w-80">
        <h3 className="text-xl mb-3">Enter MPIN to unlock</h3>
        <input className="w-full mb-3 p-2 border rounded" placeholder="4-digit MPIN" value={mpin} onChange={e => setMpin(e.target.value)} />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Unlock</button>
      </form>
    </div>
  );
}
