/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { MdCheckCircle, MdPlayCircleOutline } from "react-icons/md";

export interface IPlayerClassProps {
  title: string;
  classUrl: string;
  classCompleted?: boolean;
  reproducing?: boolean;

  onPlay: () => void;
  onCheck: () => void;
}

export default function PlayerClass({ title, onPlay, onCheck, classCompleted = false, reproducing = false}: IPlayerClassProps) {
    const [classIsCompleted, setClassIsCompleted] = useState(classCompleted);

    return (
        <div className="flex w-full gap-4 p-4 bg-background items-center">
            <button
                data-class-is-completed={classIsCompleted}
                className="rounded-full data-[class-is-completed=false]:hover:bg-text data-[class-is-completed=false]:hover:w-[34px]"
                onClick={onCheck}
            >
                {classIsCompleted ? (<MdCheckCircle size={34} color="green" /> ): (<MdPlayCircleOutline size={34} />)}
            </button>
            <button 
                className="flex flex-col"
                onClick={onPlay}
            >
                <span 
                    data-class-is-completed={classIsCompleted}
                    className="text-lg text-start line-clamp-2 data-[class-is-completed=true]:text-green-600"
                >
                    {title}
                </span>

                {reproducing && (
                    <span 
                        className="bg-blue-400 rounded-xl w-32 text-center"
                    >
                        Reproduzindo
                    </span>
                )}
            </button>
        </div>
    );
}