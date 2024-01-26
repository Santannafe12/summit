import { Settings } from "lucide-react";
import Link from "next/link";

type DashboardCardsProps = {
    title: string;
    href: string;
    description: string;
}

export default function DashboardCard({ title, href, description }: DashboardCardsProps) {
    return (
        <Link
            href={href}
            className="hover:scale-[1.02] transition-all duration-200 w-11/12 sm:w-72 sm:min-h-[96px] bg-gradient-to-r from-sky-700 to-purple-600
        rounded-lg p-4 font-semibold"
        >
            <div className="flex flex-col justify-center">
                <div className="flex justify-between text-white">
                    <h3 className="text-xl">{title}</h3>
                    <Settings />
                </div>
                <span className="text-gray-300 text-sm">{description}</span>
            </div>
        </Link>
    )
}