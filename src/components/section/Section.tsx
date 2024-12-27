import Card, { ICardProps } from "../card/Card";

interface ISectionProps {
    title: string
    variant: "grid" | "h-list"
    items: ICardProps[]
}

export default function Section({title, variant, items}: ISectionProps){
    return (
        <section className="flex flex-col gap-4 px-4 my-6">
            <h4 className="font-extrabold text-lg">{title}</h4>
            <ul 
                data-variant={variant}
                className=" w-full grid gap-2 grid-cols-1 sm:grid-cols-none 
                    data-[variant=grid]:sm:grid-cols-2
                    data-[variant=grid]:md:grid-cols-2
                    data-[variant=grid]:lg:grid-cols-3
                    data-[variant=h-list]:sm:grid-flow-col
                    data-[variant=h-list]:sm:overflow-x-auto"
                    
            >

                {items.map( item => (
                    <li key={item.title}>
                        <Card
                            title={item.title}
                            courseUrl={item.courseUrl}
                            imageUrl={item.imageUrl}
                            description={item.description}
                        />
                    </li>
                ))}

            </ul>
        </section>
    );
}