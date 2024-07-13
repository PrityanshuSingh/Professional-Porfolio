import { Suspense, lazy } from "react";
import { Routes, Route,Outlet, Navigate } from "react-router-dom";

// layouts
import { Navbar, Footer } from "./layouts";

// microInteraction
import Loading from "./mircoInteractions/Load/Load";

// Lazy loading page
const Home = lazy(() => import("./pages/Home/Home"));

const MainLayout = () => (
  <div>
    <Navbar />
    <div className="page">
      <Outlet />
    </div>
    <Footer />
  </div>
);

// const MainLayout = () => (
//   <div>
//     <div className="page">
//       <Outlet />
//     </div>
//   </div>
// );

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
