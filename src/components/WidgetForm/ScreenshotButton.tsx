import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTaken: (screenshot: string) => void;
}


export function ScreenshotButton({
    screenshot,
    onScreenshotTaken
    }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeSreenshot() {
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTaken(base64image)
        setIsTakingScreenshot(false);
    }

    if (screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => onScreenshotTaken(null!)}
                style=
                {{ 
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
            >
                <Trash
                    className="dark:text-zinc-200 text-zinc-500"
                    weight="fill" />
            </button>
        );
    }
    return (
        <button
            type="button"
            onClick={handleTakeSreenshot}
            className="p-2 bg-[#f4f4f5] dark:bg-zinc-800 rounded-md border-transparent dark:hover:bg-zinc-700 hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-[#27272A] dark:text-zinc-100" />}
        </button>
    )    
}