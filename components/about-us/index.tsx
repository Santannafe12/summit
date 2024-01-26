import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center gap-6">
            <Image
                src='/logo/logo.png'
                alt="Logo"
                width={904}
                height={904}
                className="max-h-[550px] max-w-[550px] 2xl:max-h-[650px] 2xl:max-w-[650px] 3xl:max-h-[750px] 3xl:max-w-[750px] object-cover
            overflow-hidden"
            />
            <div className="flex flex-col flex-grow justify-center gap-8 p-4 w-4/12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-indigo-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
                        Sobre Nós
                    </h1>
                    <span className="text-gray-700 text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
                        Um pouco de nossa história.
                    </span>
                </div>
                <p className="text-black/70 text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">
                    Bem-vindo ao nosso universo de descobertas e aventuras! Somos uma equipe apaixonada na missão de compartilhar
                    experiências transformadoras através do nosso blog de viagens. Na busca por inspirar e guiar exploradores,
                    cultivamos histórias autênticas e dicas valiosas para todos os amantes de viagens.
                    <br />
                    <br />
                    Desde destinos exóticos até joias escondidas, nossa plataforma é um convite para explorar o mundo de maneira única.
                </p>
                <button className="bg-sky-600 px-6 py-2 font-semibold text-2xl transition-all hover:bg-sky-700 text-white mt-6 rounded-md
                w-full md:w-5/12">
                    Saber mais
                </button>
            </div>
        </div>
    )
}