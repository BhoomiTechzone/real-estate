import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar';
import TopNavbar from './components/TopNavbar';
import Overview from './components/Overview';

function App() {
  return (
    <div className="app">
      <TopNavbar />
      <MainNavbar />
      <Overview />
    </div>
  );
}

export default App;
