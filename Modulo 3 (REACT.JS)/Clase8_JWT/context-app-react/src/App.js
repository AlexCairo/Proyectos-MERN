import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CarritoProvider } from "./context/CarritoContext";
import AuthGuard from "./helpers/AuthGuard";
import CabeceraComponent from "./components/CabeceraComponent";
import PrincipalPage from "./pages/PrincipalPage";
import LoginPage from "./pages/LoginPage";
import ProductoListadoPage from "./pages/ProductoListadoPage";
import CarritoPage from "./pages/CarritoPage";
import CompraPage from "./pages/CompraPage";
import CompraConfirmacionPage from "./pages/CompraConfirmacionPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CarritoProvider>
          <CabeceraComponent />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/principal" element={<PrincipalPage />} />
            <Route path="/productos" element={<ProductoListadoPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/compra/confirmacion" element={<CompraConfirmacionPage />} />
            <Route path="/historial" element={<AuthGuard component={CompraPage} />} />
          </Routes>
        </CarritoProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
