"use client";
import PlayerClassGroup, { IPlayerClassGroup } from "./PlayerClassGroup";

interface IPlayerContentProps {
    playerClassGroup: IPlayerClassGroup[]
}

export default function PlayerContent({playerClassGroup}:IPlayerContentProps) {
    return ( 
        <div className="flex flex-col w-96 h-full fixed overflow-x-auto">

            <div className="p-4 bg-paper my-1">
                <h2 className="font-extrabold">Conteúdo do curso</h2>
            </div>

            <div className="flex flex-col">
                <ol>
                    { playerClassGroup.map(classGroup => (
                        <PlayerClassGroup key={classGroup.title} {...classGroup}/>
                    ))}
                </ol>
            </div>
        </div>
    );
}