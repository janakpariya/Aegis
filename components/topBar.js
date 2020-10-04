import React from "react";
import { useRouter } from "next/router";

const TopBar = () => {
  const router = useRouter();
  return (
    <div className="d-flex fjbetween p--8 facenter">
      <img
        src="../images/logo.png"
        width="25%"
        alt="Logo"
        className="cursor--pointer"
        onClick={() => router.push("/home")}
      />
      <div className="facenter">Need help? Call Us +91 99xxxxxxxx</div>
    </div>
  );
};

export default TopBar;
