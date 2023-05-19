import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Message from "./pages/Message";
import Event from "./pages/Event";
import Hook from "./pages/Hook";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element = {<Home/>}></Route>
            <Route path= "/about" element = {<About/>}></Route>
            <Route path= "/contact" element = {<Contact/>}></Route>
            <Route path= "/message" element = {<Message/>}></Route>
            <Route path= "/event" element = {<Event/>}></Route>
            <Route path= "/hook" element = {<Hook/>}></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
