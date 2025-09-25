'use client' // Error boundaries must be Client Components

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <h2>Something went wrong! - about page error</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}