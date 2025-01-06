"use client";

import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface IStartCourseProps {
    title: string
    idCourse: string,
    idClass: string,
    urlImage: string
}

export default function StartCourse({ urlImage, idClass, idCourse, title }: IStartCourseProps) {
    const [ref, inView] = useInView({ threshold: 0.2, initialInView: true});

    return (
        <>
            <div
                ref={ref}
                className="flex flex-col gap-2 p-2 bg-paper md:fixed md:w-[298px]"
            >
                <Link
                    data-view={inView}
                    style={{ backgroundImage: `url(${urlImage})` }}
                    className="w-full h-full bg-cover bg-no-repeat bg-center aspect-video rounded"
                    href={`player/${idCourse}/${idClass}`}
                >
                    <div className="w-full h-full flex items-center justify-center bg-background rounded opacity-0 transition-opacity hover:opacity-80">
                        <MdPlayCircleOutline size={50} />
                    </div>
                </Link>

                <Link
                    className="w-full p-3 text-center bg-primary rounded hover:no-underline"
                    href={"course/detail/{id}"}
                >
                    Começar Curso
                </Link>
            </div>

            {!inView && ( 
                <div
                    className="flex flex-col gap-2 py-2 px-4 m-0 bg-paper fixed top-[74px] left-0 right-0"
                >
                    <h1 className="text-xl font-extrabold">{title}</h1>

                    <Link
                        className="w-full p-3 text-center bg-primary rounded hover:no-underline"
                        href={"course/detail/{id}"}
                    >
                        Começar Curso
                    </Link>
                </div>
            )

            }
        </>
    );
}