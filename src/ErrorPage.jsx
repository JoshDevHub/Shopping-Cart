import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p className="mb-2">Sorry, an unexpected error has occured.</p>
      <p className="text-red-500 font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
