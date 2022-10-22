import './App.css';
import Grid from '@mui/material/Grid'
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router";
import MerchantPage from "./pages/MerchantPage";
import StorePage from "./pages/StorePage";
import SideBar from "./components/sidebar/SideBar"
import Inventory from './components/inventory/Inventory'
import ClerkForm from './components/clerks/ClerkForm'
import DataTable from './common/datatable/DataTable'
import InventoryAnalytics from './components/analytics/InventoryAnalytics';



function App() {
  const [admins, setAdmins] = useState();
  //mStores meaning merchant stores
  const [mStores, setmStores] = useState();

  const getAdmins = useCallback((admins) => {
  }, []);

  const getmStores = useCallback((mStores) => {
    setmStores(mStores);
  }, []);

  function onAddAdmin(newAdmin) {
    setAdmins([...admins, newAdmin]);
  }
  function onDeleteAdmin(deletedAdmin){
    const newAdmins = admins.filter(admin=> admin.id!== deletedAdmin.id);
    setAdmins(newAdmins)
  }

  return (
    <Grid container>
      <SideBar/>
      <Routes>
        <Route path="/merchantpage"element={<MerchantPage admins={admins} onDeleteAdmin={onDeleteAdmin} getAdmins={getAdmins} mStores={mStores} getmStores={getmStores} onAddAdmin={onAddAdmin}/>}></Route>
        <Route path="/storepage/:storeId" element={<StorePage />}></Route>
      </Routes>
    </Grid>
  );
}

export default App;
