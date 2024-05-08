import './App.css'

import {Outlet} from "react-router-dom"
import Layout from "./ui/layout.tsx";

function App() {

  return (
     <Layout>
         <Outlet></Outlet>
     </Layout>
  )



}

export default App
