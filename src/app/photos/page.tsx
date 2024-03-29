export default function Photos() {

  let isLogged = true

  if (!isLogged) {
    return (
      <h1 className="text-4xl text-center mb-6">You must log to see the content</h1>
    )
  }

  return (
    <main>
      <h1 className="text-4xl text-center mb-6">Photos</h1>
      <div></div>
    </main>
  )
}