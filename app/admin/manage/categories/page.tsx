import { fetchCategories } from "@/actions/admin/categories/actions";
import DashboardTitle from "@/components/dashboard/dashboard-title";
import ManageCategoriesTable from "@/components/table/manage-categories";

export default async function Page() {
    const { categories, count } = await fetchCategories()

    return (
        <div className="w-full space-y-12">
            <DashboardTitle title="Gerenciar Categorias" description="Faça as ações administrativas por aqui" />
            <ManageCategoriesTable categories={categories} count={count} />
        </div>
    )
}