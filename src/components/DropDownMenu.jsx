export default function DropDownMenu({
  label,
  menuItems,
  focusedValue,
  handleClick,
}) {
  let labels = {
    2: "BINARY",
    8: "OCTAL",
    10: "DECIMAL",
    16: "HEXADECIMAL",
  };

  return (
    <div>
      <label className="form-label">{label}</label>
      <select
        defaultValue={
          Object.keys(label).includes(focusedValue)
            ? labels[focusedValue]
            : labels[10]
        }
        className="form-select"
      >
        {menuItems.map((item, index) => (
          <option
            key={index}
            defaultValue={item}
            onClick={(event) => {
              event.preventDefault();
              handleClick(item);
            }}
            className="dropdown-item"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
