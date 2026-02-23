import { Typography } from "./Typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    isError?: boolean
}

export function Input({ label, error, isError = true, className = "", ...props }: InputProps) {
    return (
        <div className="w-full flex flex-col gap-1.5">
            {label && (
                <label className="text-sm, font-semibold text-gray-text-dark ml-1">{label}</label>
            )}

            <input
                {...props}
                className={`w-full px-4 py-2.5 bg-gray-light rounded-lg text-sm outline-none ${className}`}
            />
            <div className={`${isError ? "min-h-4.5" : "min-h-0"}`}>
                {error && (
                    <Typography variant="error" className="ml-1">
                        {error}
                    </Typography>
                )}
            </div>
        </div>
    )
}