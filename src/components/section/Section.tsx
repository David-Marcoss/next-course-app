"use client";

import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Card, { ICardProps } from "../card/Card";
import { useRef, useState } from "react";

interface ISectionProps {
    title: string
    variant: "grid" | "h-list"
    items: ICardProps[]
}

export default function Section({ title, variant, items }: ISectionProps) {
    const scrollRef = useRef<HTMLUListElement>(null);

    const [positionScroll, setPositionScroll] = useState<"start" | "midle" | "end">("start");

    const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
       console.log(event.currentTarget.clientWidth ,event.currentTarget.scrollWidth,event.currentTarget.scrollLeft);

        if(event.currentTarget.scrollLeft === 0) setPositionScroll("end");
        else if((event.currentTarget.scrollWidth - event.currentTarget.clientWidth) === event.currentTarget.scrollLeft) setPositionScroll("start");
        else setPositionScroll("midle");
    };

    const handleSetScroll = (scroll: number) => {
        const scrollLeft = scrollRef.current?.scrollLeft || 0;

        scrollRef.current?.scrollTo({ behavior: "smooth", left: scrollLeft + scroll });
    };

    return (
        <section className="flex flex-col gap-4 px-4 my-6">
            <h4 className="font-extrabold text-lg">{title}</h4>
            <ul
                onScroll={ e => handleScroll(e)}
                ref={scrollRef}
                data-variant={variant}
                className=" w-full grid gap-2 grid-cols-1 sm:grid-cols-none 
                    data-[variant=grid]:sm:grid-cols-2
                    data-[variant=grid]:md:grid-cols-2
                    data-[variant=grid]:lg:grid-cols-3
                    data-[variant=h-list]:sm:grid-flow-col
                    data-[variant=h-list]:sm:overflow-x-auto"
            >

               {variant === "h-list"  && (
                 <button
                    className="w-14 h-14 hidden sm:flex items-center justify-center bg-primary rounded-full sticky my-auto left-0 -ml-14 transition-opacity disabled:opacity-0 active:opacity-80"
                    disabled= { positionScroll === "start"}
                    onClick={() => handleSetScroll(-350)}
                >
                    <MdArrowLeft size={34} />
                </button>
               )}

                {items.map(item => (
                    <li key={item.title}>
                        <Card
                            title={item.title}
                            courseUrl={item.courseUrl}
                            imageUrl={item.imageUrl}
                            description={item.description}
                        />
                    </li>
                ))}

                {variant === "h-list" && (
                    <button
                        className="w-14 h-14 hidden sm:flex items-center justify-center bg-primary rounded-full sticky my-auto right-0 -ml-14 transition-opacity disabled:opacity-0 active:opacity-80"
                        disabled= { positionScroll === "end"}
                        onClick={() => handleSetScroll(350)}
                    >
                        <MdArrowRight size={34} />
                    </button>
                )}
            </ul>
        </section>
    );
}