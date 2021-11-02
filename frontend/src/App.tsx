import Datatable from "components/datatable";
import Footer from "components/footer/index";
import NavBar from "components/navbar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">hello world!</h1>
        <Datatable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
