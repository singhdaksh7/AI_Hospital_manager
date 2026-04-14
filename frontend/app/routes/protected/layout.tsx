import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import type { Role } from "@/types";
import Loader from "@/components/global/Loader";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { useEffect } from "react";
import { toast } from "sonner";
import { getRouteConfig, navConfig } from "@/components/navigation/nav-config";
import Header from "@/components/navigation/Header";

const Layout = () => {
  const { data: session, isPending } = authClient.useSession();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userRole = (session?.user?.role as Role) || "admin";

  useEffect(() => {
    // Auth checks disabled for preview
  }, [pathname, userRole, isPending, navigate]);

  if (isPending) {
    // Skip auth pending in dev preview mode
  }

  // if (!session) {
  //   return <Navigate to="/login" replace />;
  // }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-card/50">
        <Header />
        <main className="px-4 my-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
