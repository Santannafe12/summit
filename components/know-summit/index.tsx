import Title from "../title";
import KnowSummitCard from "./card";

export default function KnowSummit() {
    return (
        <div className="w-full space-y-12">
            <div>
                <Title title="Conheça a Summit" subtitle="Sobre" />
                <div className="flex flex-wrap gap-4 justify-center">
                    <KnowSummitCard
                        src="/icons/plane.png"
                        title="Melhores Destinos"
                        description="Possuímos os melhores destinos para você viajar e aproveitar ao máximo. Saiba mais abaixo." />
                    <KnowSummitCard
                        src="/icons/star.png"
                        title="Avaliações"
                        description="Sistema de avaliações integrados em todos os posts! Antes de viajar confira a nota de outros usuários." />
                    <KnowSummitCard
                        src="/icons/wallet.png"
                        title="Preços Variados"
                        description="Dicas de passeios para todos os orçamentos. Aproveite o que há de melhor em cada viagem." />
                    <KnowSummitCard
                        src="/icons/cogwheel.png"
                        title="Personalizável"
                        description="Filtros e pesquisa adaptados para a melhor experiência de usuário. Explore os passeios de acordo com o seu gosto!" />
                </div>
            </div>
        </div>
    )
}