import { JobList } from "./components/jobs/JobList";
import { useCandidateByEmail } from "./hooks/useCandidate";
import { useJobs } from "./hooks/useJobs"

function App() {
  const candidateQuery = useCandidateByEmail("test@gmail.com")
  const jobsQuery = useJobs();

  return (
    <>
      <JobList jobsQuery={jobsQuery} candidate={candidateQuery.data} />
    </>
  )
}

export default App
