import DashboardPage from "@/components/dashboard/dashboard-page";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export default function Page() {
    return(
        <div className="w-full space-y-12">
            <DashboardTitle title="Página de Dashboard" description="Faça as ações administrativas por aqui" />
            <DashboardPage />
        </div>
    )
}