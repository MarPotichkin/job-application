interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    variant?: 'primary' | 'danger';
}

export function Button({ children, isLoading, disabled, variant = "primary", className, ...props }: ButtonProps) {
    const baseStyles = "w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"

    const variants = {
        primary: "bg-secondary text-black hover:bg-secondary-light hover:cursor-pointer disabled:bg-gray-400 disabled:text-black",
        danger: ""
    }

    const isButtonDisabled = disabled || isLoading;

    return (
        <button
            {...props}
            disabled={isButtonDisabled}
            className={`${baseStyles} ${variants[variant]} ${isButtonDisabled ? "cursor-not-allowed shadow-none" : "shadow-sm active:scale-[0.98]"} ${className}`}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                </>
            ) : (children)
            }
        </button>
    )
}