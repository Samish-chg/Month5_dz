import './App.css'
import Posts from "./components/Posts.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import CreatePost from "./components/CreatePost.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='posts' element={<Posts/>}/>
                    <Route path='create' element={<CreatePost/>}/>

                </Route>
            </Routes>
        </>
    )
}


export default App
