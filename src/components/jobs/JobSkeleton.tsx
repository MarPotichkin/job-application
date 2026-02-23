export function JobSkeleton() {
    return (
        <div className="w-full *:max-w-100 bg-white border border-gray-light p-8 rounded-2xl shadow-sm">
            <div className="mx-auto h-7 w-3/4 bg-gray-200 animate-pulse rounded-md mb-6" />
            <div className="space-y-4">
                <div className="h-10 w-full bg-gray-100 animate-pulse rounded-xl" />
                <div className="h-11 w-full bg-gray-200 animate-pulse rounded-xl" />
            </div>
        </div>
    )
}