import './App.css';
import CaseStudies from './components/CaseStudies';
import CompanyUsage from './components/CompanyUsage';
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CompanyUsage />
      <CaseStudies />
    </div>
  );
}

export default App;
