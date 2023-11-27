export default function Today() {
    let date = new Date();
  return (
    <div className="today">
      <div className="today'sDate">
        <h1>{date.toLocaleDateString()}</h1>
      </div>
    </div>
  );
}
