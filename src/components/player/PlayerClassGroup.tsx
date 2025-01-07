"use client";

import { useState } from "react";
import PlayerClass, { IPlayerClassProps  } from "./PlayerClass";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

export interface IPlayerClassGroup{
    title: string,
    classGroupNumber: number
    classes: IPlayerClassProps[]
    isListOpen?: boolean
}

export default function PlayerClassGroup({classes, title, classGroupNumber, isListOpen=false}:IPlayerClassGroup){
    const [listOpen,setListOpen] = useState(isListOpen);

    const handleClickList = () => {
        setListOpen(!listOpen);
    };

    return(

        <div className="flex flex-col">
            <button 
                className="flex w-full p-4 bg-paper items-center border-b border-background gap-4 active:opacity-80"
                onClick={handleClickList}
            >
                <span className="rounded-full bg-background text-lg w-11 h-11 flex items-center justify-center"> {classGroupNumber}</span>
                <div className="flex-1 flex flex-col items-start">
                    <h3 className="text-base"> {title}</h3>
                    <p className="text-sm">0/{classes.length} Aulas</p>
                </div>
                { listOpen ? <SlArrowDown size={18}/> : <SlArrowRight size={18}/> }
            </button>
                      
            <ol 
                data-list-open = {listOpen}
                className="flex flex-col data-[list-open=false]:hidden"
            >
                { classes.map((classItem, index) => (
                    <li key={index}>
                        <PlayerClass key={index} {...classItem} />
                    </li>
                ))}
            </ol>
        </div>
    );
}
