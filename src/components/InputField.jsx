export default function InputField({
  inputLabel,
  focusedValue,
  handleFocusedValueChange,
}) {
  return (
    <div className="mb-3">
      <label className="form-label ">{inputLabel}</label>
      <input
        value={focusedValue}
        onChange={handleFocusedValueChange}
        type="text"
        className="form-control"
      />
    </div>
  );
}
