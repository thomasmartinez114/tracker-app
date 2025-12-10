import { useState } from 'react';
import './App.css';

const initialEntries = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    type: 'diaper',
    dateTime: '2025-12-09T08:15:00',
  },
  {
    id: 'b1a2c3d4-5678-49ef-9123-abcdef123456',
    type: 'feeding',
    dateTime: '2025-12-09T09:00:00',
  },
  {
    id: '9f1c2e3a-78bc-4d90-b234-998877665544',
    type: 'nap',
    dateTime: '2025-12-09T11:30:00',
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    type: 'feeding',
    dateTime: '2025-12-09T13:10:00',
  },
];

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(entry) {
    setEntries(entries => [...entries, entry]);
  }

  return (
    <div className='App'>
      <EntriesList entries={entries} />
      <FormAddEntry onAddEntry={handleAddEntry} />
      <DataTable entries={entries} />
    </div>
  );
}

function EntriesList({ entries }) {
  return (
    <>
      {entries.map(entry => (
        <div>
          <p>{entry.type}</p>
          <p>{entry.dateTime}</p>
        </div>
      ))}
    </>
  );
}

function DataTable({ entries }) {
  return (
    <>
      <table>
        <tr>
          <th>Type</th>
          <th>Date Time</th>
        </tr>
        {entries.map(entry => (
          <tr key={entry.id}>
            <td>{entry.type}</td>
            <td>{entry.dateTime}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

function FormAddEntry({ onAddEntry }) {
  const [type, setType] = useState('feed');
  const [dateTime, setDateTime] = useState(new Date().toISOString());

  function handleSubmit(e) {
    e.preventDefault();

    if (!type || !dateTime) return;

    const id = crypto.randomUUID();
    const newEntry = {
      id,
      type,
      dateTime,
    };

    onAddEntry(newEntry);

    console.log(newEntry);

    setType('feed');
    setDateTime(new Date().toISOString());
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Type</label>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value='feed'>Feed</option>
        <option value='diaper'>Diaper</option>
        <option value='nap'>Nap</option>
      </select>

      <Button>Add Entry</Button>
    </form>
  );
}

export default App;
