import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar';
import TopNavbar from './components/TopNavbar';

function App() {
  return (
    <div className="app">
      <TopNavbar />
      <MainNavbar />
    </div>
  );
}

export default App;
