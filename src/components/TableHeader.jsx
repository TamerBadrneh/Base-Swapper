export default function TableHeader() {
  return (
    <>
      <div className="row my-3">
        <div className="col-2">Operation Id</div>
        <div className="col">Number</div>
        <div className="col">Current Base</div>
        <div className="col">New Base</div>
        <div className="col">Operation Date</div>
        <div className="col">Operation Result</div>
        <div className="col">Delete</div>
      </div>
      <hr />
    </>
  );
}
