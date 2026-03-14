import "./assets/styles/common.css";
import "./assets/styles/index.css";
import "./assets/styles/mainPage.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import './assets/styles/common.css'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <div className="app-layout">
      <div className="video-wrapper">
        <Header />
        <MainPage/>
      </div>

      <Footer />
    </div>
  );
}

export default App;