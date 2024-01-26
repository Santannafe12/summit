import Link from "next/link";
import SecondarySearch from "./secondary-search";
import PostCard from "../post-card";
import { Post } from "@/types/data";
import Pagination from "../pagination";

export default function SearchPage({posts, count, totalPages}: {posts: Post[], count: number, totalPages: number}) {
    return (
        <div className="w-full">
            <SecondarySearch count={count} />
            {count === 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-extrabold">
                        Nenhuma publicação encontrada.
                    </span>
                    <span className="text-xl text-black/70">
                        Tente procurar por outra coisa, ou explore <Link href={'/posts'}>publicações</Link>
                    </span>
                </div>
            ) : (
                <div className="w-full flex flex-col gap-12">
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post}/>
                    ))}
                    {totalPages > 1 && (
                        <Pagination totalPages={totalPages} />
                    )}
                </div>
            )}
        </div>
    )
}