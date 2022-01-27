import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/AdminPage/Admin/Admin";
import Adjustment from "./Pages/AdminPage/Admin/AdminComponents/BranchOperationComp/AdjustmentComp/Adjustment/Adjustment";
import Delivery from "./Pages/AdminPage/Admin/AdminComponents/BranchOperationComp/DeliveryComp/Delivery/Delivery";
import InternalTransfer from "./Pages/AdminPage/Admin/AdminComponents/BranchOperationComp/InternalTransferComp/InternalTransfer/InternalTransfer";
import Receive from "./Pages/AdminPage/Admin/AdminComponents/BranchOperationComp/ReceiveComp/Receive/Receive";
import AllProducts from "./Pages/AdminPage/Admin/AdminComponents/ProductManagementComp/AllProducts/AllProducts";
import ManageProduct from "./Pages/AdminPage/Admin/AdminComponents/ProductManagementComp/ManageProduct/ManageProduct";
import Bin from "./Pages/AdminPage/Admin/AdminComponents/SettingsComp/BinComp/Bin/Bin";
import Branch from "./Pages/AdminPage/Admin/AdminComponents/SettingsComp/BranchComp/Branch/Branch";
import Store from "./Pages/AdminPage/Admin/AdminComponents/SettingsComp/StoreComp/Store/Store";
import User from "./Pages/AdminPage/Admin/AdminComponents/SettingsComp/UserComp/User/User";
import Login from "./Pages/LoginPage/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />

        {/* settings routes */}
        <Route path="/admin/settings/branch" element={<Branch />} />
        <Route path="/admin/settings/store" element={<Store />} />
        <Route path="/admin/settings/bin" element={<Bin />} />
        <Route path="/admin/settings/user" element={<User />} />

        {/* Branch operation routes */}
        <Route path="/admin/branch-operation/receive" element={<Receive />} />
        <Route path="/admin/branch-operation/delivery" element={<Delivery />} />
        <Route path="/admin/branch-operation/adjustment" element={<Adjustment />} />
        <Route path="/admin/branch-operation/internal-transfer" element={<InternalTransfer />} />

        {/* Product management routes*/}
        <Route path="/admin/product-management/manage-products" element={<ManageProduct />} />
        <Route path="/admin/product-management/all-products" element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
