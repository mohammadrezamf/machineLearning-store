import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import CourseDetail from "./pages/courses/course-Detail.jsx";
import Courses from "./pages/courses/courses";
// import Home from "./pages/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sales from "./pages/sales";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
