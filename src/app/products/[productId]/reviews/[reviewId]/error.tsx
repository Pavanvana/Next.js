"use client";

interface Props {
  error: Error;
  reset: () => void;
}
export default function ErrorBoundary(props: Props) {
  const { error, reset } = props;
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
