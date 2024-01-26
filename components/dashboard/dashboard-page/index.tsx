import DashboardCard from "../dashboard-card";

export default function DashboardPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 w-full">
                <DashboardCard title="Categorias" description="Gerenciar" href="/admin/manage/categories" />
                <DashboardCard title="Localizações" description="Gerenciar" href="/admin/manage/localizations"/>
                <DashboardCard title="Publicações" description="Gerenciar" href="/admin/manage/posts"/>
            </div>
        </div>
    )
}