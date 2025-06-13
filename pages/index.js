import { useState } from 'react';
import Dashboard from '../components/Dashboard';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    // Simple password check (demo)
    const password = e.target.password.value;
    if(password === 'dalitv123') {
      setLoggedIn(true);
    } else {
      alert('Mot de passe incorrect');
    }
  }

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-8">DaliTV Panel</h1>
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-4">
          <input type="password" name="password" placeholder="Mot de passe admin" className="p-2 rounded text-black" />
          <button type="submit" className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">Se connecter</button>
        </form>
      </div>
    );
  }

  return <Dashboard />;
}
