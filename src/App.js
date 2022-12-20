import './App.css';
import useJsonFetch from './components/hooks/useJsonFetch';

function App() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading')

  return (
    <div className="App">
      <div>Data: {JSON.stringify(data)}</div>
      <div>Loading: {JSON.stringify(loading)}</div>
      <div>Error: {JSON.stringify(error)}</div>
    </div>
  );
}

export default App;
