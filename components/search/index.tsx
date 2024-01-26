'use client'

import { SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if (!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className="flex basis-full" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 my-10">
                <div className="relative flex w-full items-center">
                    <SearchIcon className="w-7 h-7 absolute text-white/50 left-4" />
                    <input
                        id="search"
                        name="search"
                        type="text"
                        className="w-full rounded-xl px-16 py-6 text-white bg-zinc-900 hover:bg-zinc-800 
                        focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:border-sky-500 focus:ring-sky-500
                        caret-white transition-all duration-300"
                        placeholder="Faça sua busca!"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </form>
    )
}