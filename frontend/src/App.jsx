import { Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import CoursesPage from "./pages/CoursesPage";   // 👈 Import nuevo
import ProfilePage from "./pages/ProfilePage";   // 👈 Import nuevo
import TeacherClasses from "./pages/TeacherClasses"; // 👈 Import nuevo
import TeacherProfile from "./pages/TeacherProfile"; // 👈 Import nuevo

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Navbars para cada rol
import PublicNavbar from "./components/navbar/PublicNavbar";
import StudentNavbar from "./components/navbar/StudentNavbar";
import TeacherNavbar from "./components/navbar/TeacherNavbar";
import AdminNavbar from "./components/navbar/AdminNavbar";

function App() {
  return (
    <Routes>
      {/* Layout público → Home, Login, Register */}
      <Route
        element={
          <MainLayout>
            <PublicNavbar />
          </MainLayout>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Estudiante */}
      <Route
        element={
          <MainLayout>
            <StudentNavbar />
          </MainLayout>
        }
      >
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<CoursesPage />} />   {/* 👈 nueva ruta */}
        <Route path="/student/profile" element={<ProfilePage />} />   {/* 👈 nueva ruta */}
      </Route>

      {/* Profesor */}
      <Route
        element={
          <MainLayout>
            <TeacherNavbar />
          </MainLayout>
        }
      >
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/classes" element={<TeacherClasses />} />   {/* 👈 nueva ruta */}
        <Route path="/teacher/profile" element={<TeacherProfile />} />   {/* 👈 nueva ruta */}
      </Route>

      {/* Admin con su propio layout */}
      <Route
        element={
          <AdminLayout>
            <AdminNavbar />
          </AdminLayout>
        }
      >
        <Route path="/admin" element={<AdminPanel />} />
      </Route>

      {/* Dashboard genérico si lo usas */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
