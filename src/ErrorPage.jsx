import Layout from "./Layout";

export default function ErrorPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 mt-3 text-3xl font-bold">Oops!</h1>
        <h2 className="text-xl font-bold text-red-500">404</h2>
        <p className="mb-2">This page doesn&apos;t exist</p>
      </div>
    </Layout>
  )
}
