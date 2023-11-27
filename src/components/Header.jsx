export default function Header() {
    let date = new Date();
  return (
    <header>
      <div className="webName">
        <h1>Local Weather</h1>
      </div>
      <div className="date">
        <h1>
        {date.toLocaleDateString()}
        </h1>
      </div>
    </header>
  );
}
