import Image from "next/image";
import Title from "../title";

export default function Technologies() {
    return (
        <div className="w-full space-y-12">
            <Title title="Tecnologias Utilizadas" subtitle="Desenvolvimento" />
            <div className="w-full flex flex-wrap gap-12 justify-center overflow-hidden">
                <Image
                    src='/home/tech/next.png'
                    alt="Imagem do Framework NextJS"
                    width={500}
                    height={300}
                    className="aspect-video max-w-[14rem] lg:max-w-xs"
                />
                <Image
                    src='/home/tech/tailwind.png'
                    alt="Imagem do TailwindCSS"
                    width={500}
                    height={300}
                    className="aspect-video max-w-[14rem] lg:max-w-xs"
                />
                <Image
                    src='/home/tech/prisma.png'
                    alt="Imagem do ORM Prisma"
                    width={500}
                    height={300}
                    className="aspect-video max-w-[14rem] lg:max-w-xs"
                />
            </div>
        </div>
    )
}