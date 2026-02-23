import { useEffect } from "react";
import { Typography } from "./Typography";

interface NotificationProps {
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

export function Notification({ message, type, isVisible, onClose }: NotificationProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    if (!isVisible) return null

    const bgStyles = type === 'success' ? 'bg-green-dark' : 'bg-[#2e1a47]'

    return (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl text-white shadow-2xl animate-in fade-in slide-in-from-right-5 duration-300 ${bgStyles}`}>
            <div className="flex items-center justify-center w-6 h-6 shrink-0">
                <span className="text-xs font-bold">{type === 'success' && '✓'}</span>
            </div>
            <Typography variant="body" className="font-semibold pr-4 leading-tight text-white">{message}</Typography>
            <button onClick={onClose} className="ml-auto hover:bg-white/20 rounded-lg p-1 transition-colors">
                <span className="sr-only">Close</span>
                <span className="text-lg hover:cursor-pointer">✕</span>
            </button>
        </div>
    )
}