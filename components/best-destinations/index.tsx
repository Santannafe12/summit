import Title from "../title";
import BestDestinationsCard from "./card";
import { Post } from "@/types/data";

type BestDestinationsProps = {
    posts: Post[]
}

export default function BestDestinations({posts}: BestDestinationsProps) {
    return (
        <div className="w-full space-y-12">
            <Title title="Melhores Destinos" subtitle="Em Destaque" />
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
                {posts.map((post, index) => (
                    <BestDestinationsCard key={index} post={post} />
                ))}
            </div>
        </div>
    )
}