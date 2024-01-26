import CreateCategorie from "@/components/crud/categories/create";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export default function Page() {
    return (
        <div className="w-full space-y-12">
            <DashboardTitle title="Criar Categoria" description="Crie uma categoria por aqui" />
            <CreateCategorie />
        </div>
    )
}