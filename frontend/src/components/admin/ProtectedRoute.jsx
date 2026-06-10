import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function ProtectedRoute({ allowedRoles = ["ADMIN", "EDITOR"] }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="min-h-screen bg-[#07080a] flex items-center justify-center text-white font-unbounded">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // Jika dibutuhkan role-based check
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/admin/login" replace />; // atau halaman 403
  }

  return <Outlet />;
}
