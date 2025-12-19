import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ user, onLogout }) {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  async function load() {
    try {
      const res = await api.get('/expenses');
      setExpenses(res.data.expenses || []);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => { load(); }, []);

  async function addExpense(e) {
    e.preventDefault();
    try {
      await api.post('/expenses', { title, amount: Number(amount) });
      setTitle(''); setAmount('');
      load();
    } catch (err) {
      alert(err?.response?.data?.message || 'Add expense failed');
    }
  }

  async function logout() {
    try {
      await api.post('/auth/logout');
      await onLogout();
      navigate('/login');
    } catch (err) {
      alert('Logout failed');
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl">Hello, {user.name}</h1>
          <div>
            <button className="mr-3 bg-yellow-400 px-3 py-1 rounded" onClick={() => navigate('/unlock')}>Lock</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={logout}>Logout</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-semibold mb-2">Add expense</h2>
          <form onSubmit={addExpense} className="flex gap-2">
            <input className="flex-1 p-2 border rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
            <input className="w-32 p-2 border rounded" placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
          </form>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Recent expenses</h2>
          <ul>
            {expenses.map(e => (
              <li key={e.id} className="flex justify-between border-b py-2">
                <div><strong>{e.title || '—'}</strong><div className="text-sm text-gray-500">{e.category} • {new Date(e.date).toLocaleDateString()}</div></div>
                <div>₹ {e.amount}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
