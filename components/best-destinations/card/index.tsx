import { Post } from "@/types/data";
import { CircleDollarSign, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BestDestinationsCardProps = {
    post: Post
}

export default function BestDestinationsCard({ post }: BestDestinationsCardProps) {
    return (
        <Link href={`/post/${post?.id}`} className="group">
            <div className="flex group-hover:shadow-2xl rounded-xl duration-300">
                <div className="flex w-full flex-col rounded-xl shadow-lg">
                    <div className="overflow-hidden rounded-t-xl">
                        <Image
                            src={post?.image || '/home/placeholder/placeholder.jpg'}
                            alt="Placeholder"
                            width={1920}
                            height={1080}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6 flex flex-col gap-4 justify-between">
                        <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-gray-700 line-clamp-2">
                            {post?.title}
                        </h1>
                        <div className="flex justify-between gap-4 items-center">
                            <div className="flex gap-2 items-center text-lg font-bold text-green-600">
                                <CircleDollarSign className="h-7 w-7" />
                                <span className="text-lg 2xl:text-xl 3xl:text-2xl">{post?.price}</span>
                            </div>

                            <div className="flex gap-2 items-center text-lg font-bold text-indigo-950">
                                <Plane className="h-7 w-7" />
                                <span className="text-lg 2xl:text-xl 3xl:text-2xl">{post?.days} dias</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}