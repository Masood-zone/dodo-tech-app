import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../../components/navbar";

function Layout() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow">
        <Outlet />
      </section>
      <footer className="">
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
