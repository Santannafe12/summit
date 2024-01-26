import { Plane, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="w-full flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6 items-center gap-6">
            <div className="flex flex-col justify-center gap-12 lg:col-span-3 p-4 h-auto lg:max-h-[700px] overflow-hidden">
                <div className="flex flex-col gap-6 leading-relaxed">
                    <h2 className="text-orange-500 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold uppercase">Melhores dicas de destino</h2>
                    <h1 className="text-indigo-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">Viaje, aproveite e viva uma nova vida cheia de alegrias</h1>
                    <p className="text-black/70 text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">
                        Explore conosco e transforme suas viagens em experiências extraordinárias. No Eterno Andarilho,
                        revelamos destinos fascinantes, desvendamos joias escondidas e convidamos você a descobrir o
                        extraordinário em cada passo.
                    </p>
                </div>
                <button className="bg-sky-600 w-full lg:w-10/12 text-white px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200
                font-semibold hover:bg-sky-700 flex items-center justify-center gap-2">
                    <Send className="w-7 h-7" />
                    Quero conhecer
                </button>
            </div>

            <Link href='/' className="lg:col-span-3 relative group">
                <div className="relative rounded-3xl overflow-hidden">
                    <Image
                        src='/home/placeholder/placeholder.jpg'
                        width={1920}
                        height={1080}
                        alt="Imagem em destaque"
                        className="object-cover h-[500px] lg:h-[700px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-100 
                    transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 p-6 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity 
                duration-300">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 items-center">
                            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold uppercase 
                            lg:p-4 lg:bg-white/70 lg:w-fit lg:rounded-lg lg:text-black">
                                Nepal
                            </h3>
                            <div className="flex gap-2 items-center text-lg font-bold">
                                <Plane className="w-8 h-8 md:h-10 md:w-10" />
                                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">7 dias</span>
                            </div>
                        </div>
                        <p className="text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl line-clamp-6">
                            Embarque em uma jornada nas vilas encantadoras do Nepal, explore o Himalaia. Aventure-se em trilhas de trekking
                            desafiadoras no topo do mundo.
                        </p>
                        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
                            <div>
                                <span className="text-pink-500 text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold uppercase break-words">
                                    #Categoria 1, #Categoria 2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}