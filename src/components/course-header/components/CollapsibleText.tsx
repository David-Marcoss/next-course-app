"use client";

import { useState } from "react";

interface ICollapsibleTextProps{
    children: React.ReactNode
    numberVisibleLines: number,

}

export default function CollapsibleText( {children, numberVisibleLines}: ICollapsibleTextProps){
    const [visibleLines,setVisibleLines] = useState(numberVisibleLines);

    return (
        <div>
            <p className={`line-clamp-${visibleLines}`}>
                {children}
            </p>
            <button 
                className="bg-paper p-1 rounded-md flex"
                onClick={() => setVisibleLines(visibleLines === numberVisibleLines ? 0 : numberVisibleLines )}
            >
                {visibleLines === numberVisibleLines ? "ver mais" : "ver menos"}
            </button>
        </div>
    );
}