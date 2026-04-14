import { Navigate } from "react-router";
import { authClient } from "@/lib/auth-client";
import type { Route } from "./+types/home";
import Loader from "@/components/global/Loader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hospital Management System" },
    { name: "description", content: "AI-Powered Realtime Hospital Management" },
  ];
}

export default function Home() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader label="Loading..." />
      </div>
    );
  }

  // If user is logged in, redirect to dashboard
  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  // If user is not logged in, redirect to login
  return <Navigate to="/login" replace />;
}
