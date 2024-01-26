type DashboardTitleProps = {
    title: string;
    description: string;
}

export default function DashboardTitle({ title, description }: DashboardTitleProps) {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-2 text-indigo-950">{title}</h1>
            <span className="text-black/70">{description}</span>
        </div>
    )
}