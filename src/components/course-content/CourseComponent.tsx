"use client";

import ClassGroup, { IClassGroup } from "./components/ClassGroup";

interface ICourseContent {
    classGroup: IClassGroup[]
}


export default function CourseContent({ classGroup}: ICourseContent) {

    return (

        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-extrabold">Conteúdo do curso</h2>

            <ol className="border border-paper rounded overflow-clip">
                {
                    classGroup.map(item => (
                        <li key={item.title}>
                            <ClassGroup key={item.title} title={item.title} classes={item.classes}/>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}