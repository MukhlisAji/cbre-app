import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import PropertySearch from "./components/PropertySearch";
import NotFound from "./components/NotFound";
import DataEntryLayout from "./components/shared/DataEntryLayout";
import BuildingMassUpload from "./components/data entry/BuildingMassUpload";
import BuildingTemplate from "./components/data entry/BuildingTemplate";
import PropertyDatabase from "./components/PropertyDatabase";
import ContainterTest from "./components/ContainterTest";
import BuildingSubmit from "./components/data entry/BuildingSubmit";
import BuildingSubmitError from "./components/data entry/BuildingSubmitError";
import SpaceMassUpload from "./components/data entry/SpaceMassUpload";
import SpaceTemplate from "./components/data entry/SpaceTemplate";
import LeaseMassUpload from "./components/data entry/LeaseMassUpload";
import ClientMassUpload from "./components/data entry/ClientMassUpload";
import LeaseTemplate from "./components/data entry/LeaseTemplate";
import ClientTemplate from "./components/data entry/ClientTemplate";
import SpaceSubmitError from "./components/data entry/SpaceSubmitError";
import SpaceSubmit from "./components/data entry/SpaceSubmit";
import LeaseSubmitError from "./components/data entry/LeaseSubmitError";
import LeaseSubmit from "./components/data entry/LeaseSubmit";
import ClientSubmitError from "./components/data entry/ClientSubmitError";
import ClientSubmit from "./components/data entry/ClientSubmit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Dashboard />} />
          <Route path="property-search" element={<PropertySearch />} />
          <Route path="data-entry-portal/property-database" element={<PropertyDatabase />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="data-entry-portal/mass-upload/*" element={<DataEntryLayout />}>
          <Route path="building" element={<BuildingMassUpload />} />
          <Route path="building/template" element={<BuildingTemplate />} />
          <Route path="building/submit/error" element={<BuildingSubmitError />} />
          <Route path="building/submit" element={<BuildingSubmit />} />

          <Route path="space" element={<SpaceMassUpload />} />
          <Route path="space/template" element={<SpaceTemplate />} />
          <Route path="space/submit/error" element={<SpaceSubmitError />} />
          <Route path="space/submit" element={<SpaceSubmit />} />

          <Route path="lease" element={<LeaseMassUpload />} />
          <Route path="lease/template" element={<LeaseTemplate />} />
          <Route path="lease/submit/error" element={<LeaseSubmitError />} />
          <Route path="lease/submit" element={<LeaseSubmit />} />

          <Route path="client" element={<ClientMassUpload />} />
          <Route path="client/template" element={<ClientTemplate />} />
          <Route path="client/submit/error" element={<ClientSubmitError />} />
          <Route path="client/submit" element={<ClientSubmit />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/test" element={<ContainterTest />} />
      </Routes>
    </Router>

  );
}

export default App;
