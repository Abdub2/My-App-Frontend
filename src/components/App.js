import Homepage from './Homepage.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import Register from './Register.js';
import Addmovie from './Addmovie.js';
import Update from './Update.js';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <div>
            <Routes>
                <Route exact path= "/" element={<Homepage/>}></Route>
                <Route exact path= "/dashboard" element={<Dashboard/>}></Route>
                <Route exact path= "/login" element={<Login/>}></Route>
                <Route exact path= "/register" element={<Register/>}></Route>
                <Route exact path= "/addmovie" element={<Addmovie/>}></Route>
                <Route exact path= "/update/:id" element={<Update/>}></Route>
            </Routes>

        </div>
    )

}

export default App;
