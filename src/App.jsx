import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import DataEntryPortal from "./components/shared/DataEntryPortal";
import PropertySearch from "./components/PropertySearch";
import NotFound from "./components/NotFound";
import DataEntryLayout from "./components/shared/DataEntryLayout";
import BuildingMassUpload from "./components/data entry/BuildingMassUpload";
import BuildingTemplate from "./components/data entry/BuildingTemplate";
import PropertyDatabase from "./components/PropertyDatabase";
import ContainterTest from "./components/ContainterTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Layout />}>
          <Route index path="/home" element={<Dashboard />} />
          <Route path="/property-search" element={<PropertySearch />} />
          <Route path="/data-entry-portal/property-database" element={<PropertyDatabase />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* <Route path="/data-entry-portal"> */}
        <Route path="/data-entry-portal/mass-upload" element={<DataEntryLayout />}>
          <Route path="/data-entry-portal/mass-upload/building" element={<BuildingMassUpload />} />
          <Route path="/data-entry-portal/mass-upload/building/building-template" element={<BuildingTemplate />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* </Route> */}
        <Route path="/test" element={<ContainterTest />} />

      </Routes>
    </Router>
  );
}

export default App;
