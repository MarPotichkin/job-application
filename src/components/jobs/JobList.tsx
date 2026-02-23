import type { UseQueryResult } from "@tanstack/react-query";
import type { Candidate } from "../../types/candidate";
import type { Job } from "../../types/job";
import { JobItem } from "./JobItem";
import { Typography } from "../ui/Typography";
import { JobSkeleton } from "./JobSkeleton";

type Props = {
    jobsQuery: UseQueryResult<Job[]>;
    candidate?: Candidate;
}

export function JobList({ jobsQuery, candidate }: Props) {
    const { data, isLoading, isError, error } = jobsQuery

    if (isLoading) {
        return (
            <section className="w-full space-y-10 py-8">
                <header className="relative inline-block">
                    <Typography variant="h1">Open Positions</Typography>
                    <Typography variant="h2" className="mb-3">Find your place at Nimble Gravity</Typography>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <JobSkeleton key={i} />
                    ))}
                </div>
            </section>
        )
    }

    if (isError) {
        return (
            <header className="relative inline-block">
                <Typography variant="h2">Something went wrong</Typography>
                <Typography variant="body" className="mb-3">
                    {error instanceof Error ? error.message : "We couldn't load the positions at this time"}
                </Typography>
            </header>
        )
    }

    if (!data || data.length === 0) {
        return (
            <header className="relative inline-block">
                <Typography variant="h2">No open position found</Typography>
                <Typography variant="body" className="mb-3">Check back later for new opportunities</Typography>
            </header>
        )
    }

    return (
        <section className="w-full space-y-10 py-8 animate-in fade-in duration-700">
            <header className="relative inline-block">
                <Typography variant="h1">Open Positions</Typography>
                <Typography variant="h2" className="mb-3">Find your place at Nimble Gravity</Typography>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((job) => (
                    <JobItem key={job.id} job={job} candidate={candidate} />
                ))}
            </div>
        </section>
    )
}