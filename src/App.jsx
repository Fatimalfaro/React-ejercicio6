import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormularioColor from "./components/FormularioColor"; 
function App() {

  return (
    <>
      <Navbar></Navbar>
      <main className="container mt-4">
      <div><FormularioColor/></div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
