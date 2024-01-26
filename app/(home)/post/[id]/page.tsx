import { fetchPostById } from "@/actions/individualPost/actions";
import IndividualPost from "@/components/individual-post";

export default async function Page({params}: {params: {id: string}}) {
    const id = parseInt(params.id, 10)

    const post = await fetchPostById(id);

    return (
        <div className="w-full md:w-10/12 m-auto py-8 px-4 md:p-0 min-h-screen">
            <IndividualPost post={post}/>
        </div>
    )
}