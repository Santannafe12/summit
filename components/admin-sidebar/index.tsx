'use client'

import { FlameKindling, Home, Layers, LayoutDashboard, Menu, ScrollText, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LinksSidebar = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/manage/categories', label: 'Categorias', icon: Layers },
    { href: '/admin/manage/localizations', label: 'Localizações', icon: FlameKindling },
    { href: '/admin/manage/posts', label: 'Publicações', icon: ScrollText },
    { href: '/', label: 'Página Inicial', icon: Home },
]

export default function AdminSidebar() {
    const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false)

    const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSidebarOpen)

    return (
        <div>
            <div className="bg-indigo-950 sm:hidden flex flex-wrap items-center justify-between px-3 py-4">
                <div className="flex items-center gap-2 cursor-default">
                    <Image
                        src={'/logo/logo.png'}
                        alt="Logo do blog"
                        width={48}
                        height={48}
                        className="w-12 h-12"
                    />
                    <span className="text-2xl text-white font-semibold">
                        Summit
                    </span>
                </div>
                <Menu
                    className="w-8 h-8 text-white"
                    onClick={toggleAdminSidebar}
                />
            </div>
            <aside
                className={`fixed top-0 left-0 z-40 w-full sm:w-72 h-screen transition-transform ${isAdminSidebarOpen ? '' : '-translate-x-full'}
            sm:translate-x-0`}
            >
                <div className="bg-indigo-950 h-full px-3 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 cursor-default">
                            <Image
                                src={'/logo/logo.png'}
                                alt="Logo do blog"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                            <span className="text-2xl text-white font-semibold">
                                Summit
                            </span>
                        </div>
                        <X
                            className="w-8 h-8 text-white sm:hidden"
                            onClick={toggleAdminSidebar}
                        />
                    </div>
                    <div className="h-[1px] w-full bg-gray-500 my-4" />
                    <ul className="space-y-8">
                       {LinksSidebar.map(({href, label, icon: Icon}, index) => (
                        <li key={index}>
                            <Link href={href} className="flex items-center px-2 py-3 rounded-lg hover:bg-white/20">
                                <Icon
                                className="w-6 h-6 text-gray-400" 
                                />
                                <span className="ms-3 text-xl text-white">{label}</span>
                            </Link>
                        </li>
                       ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}