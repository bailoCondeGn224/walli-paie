import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { SideBar } from "./components/sidebar";
import { items, user } from "./components/sidebar/sidebarLink";
import Navbar from "./layouts/navbar/navbar.layout";
import AccountPage from "./pages/account.page";
import CreateAccount from "./features/account/composants/create-account";

function Layout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SideBar user={user} onLogout={() => {}} subMenu={items} />
      <main className="flex-1 ps-[270px] p-4">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="/dashboard" element={<h1>Tableau de Bord</h1>} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/account/create-account" element={<CreateAccount />} />
        <Route path="/account/export-data-account" element={<AccountPage />} />
        <Route path="/bank" element={<h1>bank</h1>} />
        <Route path="/employee" element={<h1>Employé</h1>} />
        <Route path="/payment" element={<h1>Paiement</h1>} />
        <Route path="/history" element={<h1>Historique</h1>} />
        <Route path="/setting" element={<h1>Sécurité</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
