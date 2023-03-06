import Homepage from './Homepage.js';
import Login from './Login.js';
import MovieList from './MovieList.js';
import Register from './Register.js';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <div>
            <Routes>
                <Route exact path= "/" element={<Homepage/>}></Route>
                <Route exact path= "/movielist" element={<MovieList/>}></Route>
                <Route exact path= "/login" element={<Login/>}></Route>
                <Route exact path= "/register" element={<Register/>}></Route>
            </Routes>

        </div>
    )

}

export default App;
