import { Header, type HeaderProps } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
    headerProps: HeaderProps
}

export function Layout({ children, headerProps }: LayoutProps) {
    return (
        <div className="min-h-screen bg-background-layout flex flex-col items-center">
            <Header {...headerProps} />
            <main className="max-w-6xl w-full px-4 py-8 md:py-12">
                {children}
            </main>

            <footer className="mt-auto py-8 text-center text-gray-400 text-xs">
                Mariana Potichkin - Challenge Nimble Gravity - 2026
            </footer>
        </div>
    )
}