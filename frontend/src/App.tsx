import BarChart from "components/barchart";
import DonutChart from "components/donutchart";
import Datatable from "components/datatable";
import Footer from "components/footer/index";
import NavBar from "components/navbar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboards de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>
        <Datatable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
