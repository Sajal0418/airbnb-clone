import {Route,Routes} from "react-router-dom";
import './App.css'
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL='http://localhost:4000';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Route>
    </Routes>
   
  )
}

export default App
