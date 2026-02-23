import { useState } from "react"
import type { Candidate } from "../../types/candidate"
import type { Job } from "../../types/job"
import { Input } from "../ui/Input"
import { Typography } from "../ui/Typography"
import { Button } from "../ui/Button"
import { useApplyToJob } from "../../hooks/useApplyToJob"
import { isValidateGitHubRepo } from "../../utils/isValidUrl"
import { Notification } from "../ui/Notification"

type Props = {
    job: Job
    candidate?: Candidate
}

export function JobItem({ job, candidate }: Props) {
    const [repoUrl, setRepoUrl] = useState("");
    const [urlError, setUrlError] = useState<string | undefined>();
    const [toastConfig, setToastConfig] = useState({ isVisible: false, message: "", type: 'success' as 'success' | 'error' })

    const applyMutation = useApplyToJob({
        jobId: job.id,
        candidate: candidate as Candidate,
        onSuccess: () => {
            setToastConfig({ isVisible: true, message: "Application sent!", type: 'success' })
            setRepoUrl("")
        },
        onError: (err) => {
            setToastConfig({ isVisible: true, message: err.message || "Error", type: 'error' })
        }
    })

    const handleSubmit = () => {
        if (!candidate) {
            setToastConfig({ isVisible: true, message: "Please sign in first", type: 'error' })
            return
        }
        if (!isValidateGitHubRepo(repoUrl)) {
            setUrlError("Please enter a valid GitHub url (https://github.com/...)")
            return
        }

        setUrlError(undefined)
        applyMutation.mutate(repoUrl)
    }

    return (
        <div className="w-full max-w-100 bg-white border border-gray-light p-8 rounded-2xl shadow-sm">
            <Typography variant="h3" className="mb-6 text-center">{job.title}</Typography>

            <div className="space-y-4">
                <Input
                    placeholder="https://github.com/user/repo"
                    value={repoUrl}
                    error={urlError}
                    onChange={(e) => {
                        setRepoUrl(e.target.value)
                        if (urlError) setUrlError(undefined)
                    }}
                />
                <Button onClick={handleSubmit} isLoading={applyMutation.isPending}>
                    Apply Now
                </Button>
            </div>

            <Notification {...toastConfig} onClose={() => setToastConfig({ ...toastConfig, isVisible: false })} />
        </div>
    )
}