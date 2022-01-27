import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/AdminPage/Admin/Admin";
import Bin from "./Pages/AdminPage/Admin/AdminComponents/BinComp/Bin/Bin";
import Branch from "./Pages/AdminPage/Admin/AdminComponents/BranchComp/Branch/Branch";
import Store from "./Pages/AdminPage/Admin/AdminComponents/StoreComp/Store/Store";
import User from "./Pages/AdminPage/Admin/AdminComponents/UserComp/User/User";
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
        <Route path="/admin/branch-operation/receive" element={<p>Receive</p>} />
        <Route path="/admin/branch-operation/delivery" element={<p>Delivery</p>} />
        <Route path="/admin/branch-operation/adjustment" element={<p>Adjustment</p>} />
        <Route path="/admin/branch-operation/internal-transfer" element={<p>I. transfer</p>} />
      </Routes>
    </div>
  );
}

export default App;
