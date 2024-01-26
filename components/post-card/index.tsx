import { Post } from "@/types/data";
import { CircleDollarSign, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
    return (
        <Link
            href={'/'}
            className="w-full lg:w-10/12 flex group"
        >
            <div className="w-full flex flex-col lg:flex-row text-gray-700 shadow-lg rounded-xl group-hover:shadow-2xl duration-300 overflow-hidden">
                <Image
                    src={post?.image || '/home/placeholder/placeholder.jpg'}
                    alt="Placeholder"
                    width={1920}
                    height={1080}
                    className="max-w-full lg:max-w-[450px] 2xl:max-w-[550px]"
                />
                <div className="flex flex-col justify-between gap-4 p-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="line-clamp-1 text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-indigo-950">
                            {post?.title}
                        </h1>
                        <div className="flex gap-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-1 text-sky-600">
                                    <Plane className="h-5 w-5" />
                                    <span className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">{post?.days} dias</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-1 text-lime-600">
                                    <CircleDollarSign className="h-5 w-5" />
                                    <span className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">{post?.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="line-clamp-3 text-base 2xl:text-xl 3xl:text-2xl">
                        {post?.content}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                        {post?.categories?.map((category, index) => (
                            <span key={index} className="text-pink-500 text-sm 2xl:text-lg 3xl:text-xl font-semibold uppercase break-words">
                                #{category?.name}
                                {index < post.categories?.length! - 1 && ', '}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}