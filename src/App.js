import logo from './logo.svg'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav'
import ItemDetails from './components/ItemDetails'

function App() {
    return (
        <div className='App'>
            <div className="container">
                <Nav />
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ItemDetails />}/>
                </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
