import logo from './logo.svg'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav'
import ItemDetails from './components/ItemDetails'
import Home from './components/Home'

function App() {
    return (
        <div className='App'>
            <Nav />
            <div className="container page-content">
                <BrowserRouter>
                <Routes>
                    <Route exact name="home" path="/" element={<Home />}/>
                    <Route name="product-page" path="/:urlKey" element={<ItemDetails />}/>
                </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
