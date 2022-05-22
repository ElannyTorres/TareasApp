import './App.css';

import FreeCodeCampLogo from './components/FreeCodeCampLogo';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <FreeCodeCampLogo />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
