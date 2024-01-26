import Image from "next/image";

export default function Contact() {
    return (
        <div className="w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center shadow-xl py-8 px-4 gap-6">
            <div className="flex flex-col flex-grow justify-center p-4 gap-16 w-4/12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-indigo-950 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold">
                        Algum destino que gostaria de ver?
                    </h1>
                    <span className="text-gray-700 text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
                        Entre em contato conosco!
                    </span>
                </div>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Nome" className="p-3" required />
                    <input type="email" placeholder="Email" className="p-3" required />
                    <input type="text" placeholder="Assunto" className="p-3" required />
                    <textarea placeholder="Mensagem" rows={5} className="p-3 resize-none" />
                    <div className="h-[1px] bg-black/50 my-2" />
                    <button className="w-10/12 lg:w-8/12 m-auto bg-orange-500 text-white mt-0 hover:bg-orange-600 py-4 px-8 rounded-md
                    text-lg 2xl:text-2xl font-semibold transition-all">
                        Entrar em contato
                    </button>
                </form>
            </div>
            <Image
                src='/home/contact/contact.jpg'
                alt="Contato"
                width={1000}
                height={1000}
                className="max-h-[700px] max-w-[700px] object-cover overflow-hidden"
            />
        </div>
    )
}