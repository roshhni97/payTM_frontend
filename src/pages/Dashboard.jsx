import React, { useEffect } from "react";
import Appbar from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/User";
const Dashboard = () => {
  const balance = 1000;
  return (
    <div className="px-40 py-20">
      <Appbar />
      <Balance value={balance} />
      <Users />
    </div>
  );
};

export default Dashboard;
