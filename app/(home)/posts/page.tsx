import { fetchPosts } from "@/actions/posts/actions";
import PostsPage from "@/components/posts-page";

export default async function Page({
    searchParams
}: {
    searchParams: {
        page?: string;
    }
}) {

    const currentPage = Number(searchParams?.page) || 1
    const { posts, totalPages } = await fetchPosts(currentPage)

    return (
        <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
            <PostsPage posts={posts} totalPages={totalPages} />
        </div>
    )
}