import './App.css';

const entries = [
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
  return (
    <div className='App'>
      <EntriesList />
      <DataTable entries={entries} />
    </div>
  );
}

function EntriesList() {
  return (
    <>
      {entries.map(entry => (
        <div>
          <p>{entry.type}</p>
          <p>{entry.dateTime}</p>
        </div>
      ))}

      <div>
        <Button>Add Entry</Button>
      </div>
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

export default App;
