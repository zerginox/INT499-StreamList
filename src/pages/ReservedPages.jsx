function ReservedPage({ name }) {
  return (
    <section className="wrap reserved-page">
      <title>{`${name} | StreamList`}</title>
      <h1>{name}</h1>
    </section>
  );
}

export function Movies() { return <ReservedPage name="Movies" />; }
export function Cart() { return <ReservedPage name="Cart" />; }
export function About() { return <ReservedPage name="About" />; }
