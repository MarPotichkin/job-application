import { useState } from "react";
import { JobList } from "./components/jobs/JobList";
import { Layout } from "./components/layout/Layout";
import { useCandidateByEmail } from "./hooks/useCandidate";
import { useJobs } from "./hooks/useJobs"
import { isValidEmail } from "./utils/isValidEmail";

function App() {
  const [emailInput, setEmailInput] = useState("")
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | undefined>()

  const candidateQuery = useCandidateByEmail(submittedEmail ?? "")
  const jobsQuery = useJobs();

  function handleSubmitEmail() {
    if (!isValidEmail(emailInput)) {
      setEmailError("Please enter a valid email address")
      return
    }
    setEmailError(undefined)
    setSubmittedEmail(emailInput.trim())
  }

  function handleClearCandidate() {
    setSubmittedEmail(null)
    setEmailInput("")
    setEmailError(undefined)
  }

  const headerProps = {
    emailInput,
    setEmailInput: (val: string) => {
      setEmailInput(val);
      if (emailError) setEmailError(undefined)
    },
    onSubmit: handleSubmitEmail,
    onClear: handleClearCandidate,
    candidateQuery,
    emailError
  }

  return (
    <>
      <Layout headerProps={headerProps}>
        <JobList jobsQuery={jobsQuery} candidate={candidateQuery.data} />
      </Layout>
    </>
  )
}

export default App
