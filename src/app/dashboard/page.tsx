'use client';
import { signout } from "@/app/sign-in/action";

const Dashboard = () => {
  const handleSignout = async () => {
    console.log("signing out...")
    try{
    await signout();
      // Optionally, redirect the user or perform other actions upon successful signout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main>
      <p>Dashboard</p>
      <button onClick={handleSignout} className="e-btn">Sign out</button>
    </main>
  );
};

export default Dashboard;
