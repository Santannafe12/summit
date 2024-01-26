import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-indigo-950 text-center w-full mt-24 py-8 min-h-[250px] flex flex-col gap-12 items-center justify-center">
            <div className="flex flex-col gap-4 px-4">
                <span className="text-2xl font-semibold text-white text-center">Summit</span>
                <span className="text-base text-center text-gray-500">2023 - 2024 Summit. Todos os direitos reservados. Desenvolvido por CodeJR.</span>
            </div>
            <Link href='https://www.codejr.com.br' target="_blank">
                <Image
                    src='/logo/code.png'
                    width={1920}
                    height={1080}
                    alt="Logo da CodeJR"
                    className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                />
            </Link>
        </div>
    )
}