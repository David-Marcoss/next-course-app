"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export default function Header() {
    const [pageTitle, setPageTitle] = useState("Codando");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const currentPath = usePathname();

    useEffect(() => {
        setPageTitle(document.title);
        setIsDrawerOpen(false);
    }, [currentPath]);

    return (
        <>
            <header>
                <nav className="w-full bg-primary fixed flex items-center justify-start sm:justify-center p-5">
                    {/* tabIndex: serve para bloquear a navegação dos itens com a tecla tab ao adicioar -1 */}
                    <ul className="flex items-center gap-2 sm:gap-4" tabIndex={isDrawerOpen ? -1 : undefined}>
                        <button className="block sm:hidden" onClick={() => setIsDrawerOpen(true)}>
                            <MdMenu size={30} />
                        </button>
                        <li className="border-2 rounded-md p-1 ">
                            <Link href="/" className="hover:no-underline">CODANDO</Link>
                        </li>
                        <li className="hidden sm:block">
                            <Link href="/" className={currentPath === "/" ? "underline" : ""}>Página Inicial</Link>
                        </li>
                        <li className="hidden sm:block">
                            <Link href="/cursos" className={currentPath === "/cursos" ? "underline" : ""}>Cursos</Link>
                        </li>
                        <li className="hidden sm:block">
                            <Link className="flex items-center gap-1" href="https://blog.codarse.com/" target="_blank">
                                Blog
                                <MdOutlineOpenInNew />
                            </Link>
                        </li>

                        <h1 className="block sm:hidden line-clamp-1">
                            {pageTitle}
                        </h1>
                    </ul>
                </nav>
                
                <div
                    tabIndex={!isDrawerOpen ? undefined : -1}
                    data-open={isDrawerOpen}
                    className={"bg-gradient-to-r from-background fixed top-0 right-0 bottom-0 left-0 transition-transform data-[open=false]:-translate-x-full sm:-translate-x-full"}
                    onClick={() =>  setIsDrawerOpen(false)}
                >
                    <ul className="w-60 h-full bg-background flex flex-col gap-4 p-5" onClick={(e) =>  e.stopPropagation()}>
                        <li className={currentPath === "/" ? "border-b" : ""}>
                            <Link href="/">Página Inicial</Link>
                        </li>
                        <li className={currentPath === "/cursos" ? "border-b" : ""}>
                            <Link href="/cursos">Cursos</Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-1" href="https://blog.codarse.com/" target="_blank">
                                Blog
                                <MdOutlineOpenInNew />
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="mt-24"/>
        </>
    );
};