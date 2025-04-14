export default function ResultCard({ operation }) {
  const { number, fromBase, toBase, conversionResult, operationDate } =
    operation;
  return (
    <section className="d-flex justify-content-center m-5">
      <div
        className="card"
        style={{
          width: "30rem",
        }}
      >
        <div className="card-body">
          <h2 className="card-title h4">Conversion Result</h2>
          <h3 className="card-subtitle mb-2 text-body-secondary h6">
            At {operationDate}
          </h3>
          <p className="card-text">
            Number: {number} <br />
            From Base: {fromBase} <br />
            To Base: {toBase} <br />
            Result: {conversionResult}
          </p>
        </div>
      </div>
    </section>
  );
}
