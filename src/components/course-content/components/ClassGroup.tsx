"use client";

import { useState } from "react";
import Class, { IClassProps } from "./Class";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

export interface IClassGroup{
    title: string,
    classes: IClassProps[]
    isListOpen?: boolean
}

export default function ClassGroup({classes, title, isListOpen=false}:IClassGroup){
    const [listOpen,setListOpen] = useState(isListOpen);

    const handleClickList = () => {
        setListOpen(!listOpen);
    };

    return(

        <div className="flex flex-col">
            <button 
                className="flex w-full p-4 bg-paper items-center border-b border-background gap-2 active:opacity-80"
                onClick={handleClickList}
            >
                { listOpen ? <SlArrowDown size={14}/> : <SlArrowRight size={14}/> }
                <span className="text-lg"> {title}</span>
            </button>
                      
            <ol 
                data-list-open = {listOpen}
                className="flex flex-col data-[list-open=false]:hidden"
            >
                { classes.map((classItem, index) => (
                    <li key={index}>
                        <Class key={index} {...classItem} />
                    </li>
                ))}
            </ol>
        </div>
    );
}