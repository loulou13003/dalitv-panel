import { useState } from 'react';

export default function Dashboard() {
  const [subs, setSubs] = useState([
    { name: "Aghilas", duration: "1 an", status: "actif" },
    { name: "Yanis", duration: "6 mois", status: "expiré" }
  ]);
  const [form, setForm] = useState({ name: "", duration: "6 mois" });

  function handleAdd(e) {
    e.preventDefault();
    setSubs([...subs, { ...form, status: "actif" }]);
    setForm({ name: "", duration: "6 mois" });
  }

  function toggleStatus(index) {
    const updated = [...subs];
    updated[index].status = updated[index].status === "actif" ? "expiré" : "actif";
    setSubs(updated);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Tableau de bord DaliTV</h2>

      <form onSubmit={handleAdd} className="mb-6 flex gap-2">
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Nom de l’abonné"
          className="p-2 rounded border"
          required
        />
        <select
          value={form.duration}
          onChange={e => setForm({ ...form, duration: e.target.value })}
          className="p-2 rounded border"
        >
          <option value="6 mois">6 mois (30€)</option>
          <option value="1 an">1 an (50€)</option>
        </select>
        <button type="submit" className="bg-green-600 text-white px-4 rounded hover:bg-green-700">
          Ajouter
        </button>
      </form>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Nom</th>
            <th className="p-2">Durée</th>
            <th className="p-2">Statut</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((sub, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{sub.name}</td>
              <td className="p-2">{sub.duration}</td>
              <td className="p-2">{sub.status}</td>
              <td className="p-2">
                <button
                  onClick={() => toggleStatus(i)}
                  className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Changer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
    }
