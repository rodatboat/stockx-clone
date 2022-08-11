import logo from './logo.svg'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav'
import ItemDetails from './components/ItemDetails'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
            <Nav />
            <div className="container page-content">
                <Routes>
                    <Route exact name="home" path="/" element={<Home />}/>
                    <Route name="product-page" path="/:urlKey" element={<ItemDetails />}/>
                </Routes>
            </div>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
