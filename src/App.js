import { Routes, Route } from "react-router-dom";
import styles from './App.module.scss'
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className={styles.sectionPage}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;