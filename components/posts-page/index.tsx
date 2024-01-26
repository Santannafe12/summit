import { Post } from "@/types/data";
import PostCard from "../post-card";
import Pagination from "../pagination";

export default function PostsPage({ posts, totalPages }: { posts: Post[], totalPages: number }) {
    return (
        <div className="w-full flex flex-col gap-12">
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} />
            )}
        </div>
    )
}