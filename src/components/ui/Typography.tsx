interface TypographyProps {
    children: React.ReactNode
    variant: 'h1' | 'h2' | 'h3' | 'body' | 'error' | 'success'
    className?: string;
    as?: React.ElementType
}

export function Typography({ children, variant, className = "", as }: TypographyProps) {
    const styles = {
        h1: "text-[56px]! font-extrabold text-primary-dark font-tiempos",
        h2: "text-3xl font-bold text-gray-text-light font-tiempos",
        h3: "text-xl font-semibold text-gray-800 font-trebuchet",
        body: "text-sm text-gray-600 leading-relaxed font-trebuchet",
        error: "text-xs font-medium text-red-600 flex items-center gap-1 font-trebuchet",
        success: "text-xs font-medium text-green-dark flex items-center gap-1 font-trebuchet"
    }

    const defaultTag = variant.startsWith('h') ? variant : 'p';
    const Tag = (as || defaultTag) as any;

    return (
        <Tag className={`${styles[variant]} ${className}`}>
            {children}
        </Tag>
    )
}