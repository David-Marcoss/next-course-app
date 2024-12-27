import Image from "next/image";
import Link from "next/link";

interface ICardProps {
    title: string,
    description: string,
    imageUrl: string,
    courseUrl: string
}

export default function Card({title,description,courseUrl,imageUrl}: ICardProps) {

    return (
        <Link href={courseUrl} className="hover:no-underline">
            <article
                className="flex flex-col box-border w-auto h-auto sm:w-72 sm:h-80 gap-2 sm:hover:bg-primary p-2 rounded-sm"
            >
                <Image
                    className="rounded-md aspect-video object-cover"
                    height={0}
                    width={1000}
                    alt={title}
                    src={imageUrl}
                    draggable={false}
                />
                <h5 className="font-extrabold">
                    {title}
                </h5>
                <p className="line-clamp-3">
                    {description}
                </p>
            </article>
        </Link>
    );
}