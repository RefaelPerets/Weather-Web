export default function Today() {
  return (
    <div className="today">
      <div className="today'sDate">
        <h1>{date.toLocaleDateString()}</h1>
      </div>
    </div>
  );
}
