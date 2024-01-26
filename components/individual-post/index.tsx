import { IndividualPost } from "@/types/data";
import { MapPin, Plane, UsersRound } from "lucide-react";
import Image from "next/image";

export default function IndividualPost({ post }: { post: IndividualPost }) {
    return (
        <div className="w-full flex flex-col lg:grid lg:grid-cols-8 gap-8">
            <div className="lg:col-span-4">
                <Image
                    src={post?.image || '/home/placeholder/placeholder.jpg'}
                    alt="Placeholder"
                    width={1920}
                    height={1080}
                    className="lg:h-[700px] object-cover aspect-video w-full rounded-xl"
                />
            </div>
            <div className="lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 overflow-auto flex flex-col gap-8 lg:gap-4">
                <div className="flex flex-wrap items-center gap-4 justify-between font-semibold text-gray-700">
                    <h1 className="text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-2">
                        {post?.title}
                    </h1>
                    <div className="flex items-center gap-1">
                        <Plane className="md:w-7 md:h-7" />
                        <span className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl">{post?.days} dias</span>
                    </div>
                </div>
                <p className="text-base 2xl:text-lg 3xl:text-xl text-justify">
                    {post?.content}
                </p>
                <p className="text-base 2xl:text-lg 3xl:text-xl text-justify">
                    {post?.location?.content}
                </p>
                <div className="space-y-4">
                    <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl line-clamp-2 text-gray-700 font-semibold">
                        Informações Adicionais:
                    </h1>
                    <div className="flex gap-4 font-semibold text-indigo-950 text-sm">
                        <div className="flex items-center gap-1">
                            <UsersRound />
                            <span>{post?.location?.population} hab.</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin />
                            <span>{post?.location?.city}, {post?.location?.country}.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}