"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { MdCheckCircle, MdContentCopy } from "react-icons/md";

interface ICopyContentProps {
    title: string;
    content: string;
    children: React.ReactNode;
}

export default function CopyContent({ children, title, content }: ICopyContentProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        window.navigator.clipboard.writeText(content);
        setCopied(true);
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="bg-paper" sideOffset={5} onCloseAutoFocus={ () => setCopied(false)}>
                    <DropdownMenu.Item
                        className="flex flex-col gap-4 px-4 py-2 rounded-xl border border-primary w-80"
                        onSelect={(event) => event.preventDefault()} // Previne o fechamento
                    >
                        <span className="text-lg font-extrabold">{title}</span>

                        <div className="flex gap-1 w-full items-center justify-center">
                            <input
                                type="text"
                                className="w-full rounded-sm bg-background p-2 active:border border-text"
                                value={content}
                                readOnly
                                autoFocus
                                onFocus={(e) => e.target.select()}
                            />
                            <button
                                className="flex justify-end"
                                onClick={handleCopy}
                            >
                                {!copied ? <MdContentCopy size={24} /> : <MdCheckCircle size={24} />}
                            </button>
                        </div>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
