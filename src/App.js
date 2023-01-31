import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import DamagedTransformer from "./scenes/damagedTransformer";
import EquipmentDash from "./scenes/equipmentDash";
import MainDash from "./scenes/mainDash";
import ParameterViolation from "./scenes/parameterViolation";
import SubstationDash from "./scenes/substationDash";
import TransactionScreen from "./scenes/transactionScreen";
import TransmissionlineDash from "./scenes/transmissionlineDash";
import TrippingBreakdown from "./scenes/trippingbreakdown";
import Inventory from "./scenes/inventory";


function App() {
  const [theme,colorMode]=useMode();

  return (
    <ColorModeContext.Provider value = {colorMode} >
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
      <Sidebar/>
        <main className="content">
          <Topbar/>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/mainDash" element={<MainDash />} />
              <Route path="/substationDash" element={<SubstationDash/>} />
              <Route path="/transmissionlineDash" element={<TransmissionlineDash/>} />
              <Route path="/equipmentDash" element={<EquipmentDash />} />
              <Route path="/transactionScreen" element={<TransactionScreen/>} />
              <Route path="/damagedTransformer" element={<DamagedTransformer />} />
              <Route path="/trippingbreakdown" element={<TrippingBreakdown/>} />
              <Route path="/parameterViolation" element={<ParameterViolation />} />
              <Route path="/inventory" element={<Inventory/>} />

          </Routes>
        </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
