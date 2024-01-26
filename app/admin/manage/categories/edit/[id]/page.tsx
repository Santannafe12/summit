import { fetchCategoryById } from "@/actions/admin/categories/actions";
import EditCategorie from "@/components/crud/categories/edit";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export default async function Page(
    { params }:
        {
            params: { id: string }
        }
) {

    const id = parseInt(params.id, 10)
    const category = await fetchCategoryById(id)

    return (
        <div className="w-full space-y-12">
            <DashboardTitle title={`Editar Categoria ${category?.name}`} description="Edite uma categoria por aqui" />
            <EditCategorie category={category} />
        </div>
    )
}