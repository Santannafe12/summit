'use client'

import { Menu, SearchIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "../search";
import { usePathname, useSearchParams } from "next/navigation";

// Definição dos links de navegação
const links = [
    { href: '/posts', label: 'Publicações' },
    { href: '/admin', label: 'Admin' }
]

export default function Header() {
    // Estados para controlar a abertura/fechamento do menu de navegação e da barra de pesquisa
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Funções para alternar entre os estados do menu e da barra de pesquisa
    const toggleNav = () => setIsNavOpen(!isNavOpen)
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    // Função para alternar entre o menu e a barra de pesquisa, fechando um quando o outro é aberto
    const toggleNavSearch = () => {
        if (isSearchOpen) {
            toggleSearch()
        }
        else {
            toggleNav()
        }
    }

    useEffect(() => {
        setIsSearchOpen(false)
        setIsNavOpen(false)
    }, [pathname, searchParams])

    return (
        // Estrutura do cabeçalho
        <header className="bg-indigo-950 sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                {/* Link para a página inicial e logo do blog */}
                <Link href="/" className="flex gap-4 items-center">
                    <Image
                        src="/logo/logo.png"
                        alt="Logo do blog"
                        width={904}
                        height={904}
                        className="h-20 w-20 rounded-xl"
                    />
                    <span className="text-white hidden md:block text-3xl font-semibold">|</span>
                    <span className="text-white hidden md:block text-3xl font-semibold uppercase">Summit</span>
                </Link>
                {/* Navegação principal */}
                <nav className="flex justify-end">
                    {/* Navegação para dispositivos médios e grandes */}
                    <div className="hidden w-full md:flex justify-end items-center gap-16">
                        <button onClick={toggleNav}>
                            {isSearchOpen ?
                                <X
                                    onClick={toggleSearch}
                                    className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl" />
                                :
                                <SearchIcon
                                    onClick={toggleSearch}
                                    className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl" />
                            }
                        </button>
                        {/* Mapeamento dos links de navegação */}
                        {links.map((link, index) => (
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 p-2 rounded-xl">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                    {/* Navegação para dispositivos pequenos (mobile) */}
                    <div className="md:hidden">
                        {isNavOpen || isSearchOpen ?
                            <X
                                onClick={toggleNavSearch}
                                className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl" />
                            :
                            <div className="flex gap-4">
                                <SearchIcon
                                    onClick={toggleSearch}
                                    className="w-12 h-12 text-white" />
                                <Menu
                                    onClick={toggleNav}
                                    className="w-12 h-12 text-white" />
                            </div>
                        }
                    </div>
                </nav>
                {/* Exibição da barra de pesquisa se estiver aberta */}
                {isSearchOpen && (
                    <Search />
                )}
                {/* Exibição do menu de navegação se estiver aberto */}
                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {links.map((link, index) => (
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 p-2 rounded-xl">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}
