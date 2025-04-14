import { useState } from "react";
import formValidator from "../validation/formValidator";
import convertToBase from "../services/convertToBase";
import InputField from "./InputField";
import Button from "./Button";
import { useContext } from "react";
import { ConversionsHistoryContext } from "../context/ConversionsHistoryContextDefinition";
import DropDownMenu from "./DropDownMenu";
import { BASES } from "../constants/Bases";

export default function Form({ getOperationResult }) {
  const [number, setNumber] = useState("");
  const [fromBase, setFromBase] = useState("");
  const [toBase, setToBase] = useState("");
  const [formError, setFormError] = useState("");
  const [simplifiedMenu, setSimplifiedMenu] = useState(false);
  const { conversionsHistory, setConversionsHistory } = useContext(
    ConversionsHistoryContext
  );

  // Elements List
  const fields = [
    {
      inputLabel: "Current Base",
      focusedValue: fromBase,
      handleFocusedValueChange: handleFromBaseChange,
    },
    {
      inputLabel: "New Base",
      focusedValue: toBase,
      handleFocusedValueChange: handleToBaseChange,
    },
  ];

  const buttons = [
    {
      children: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-right mb-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          {" Convert"}
        </>
      ),
      type: "btn-primary",
      onClickHandler: null,
      link: "",
    },

    {
      children: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-counterclockwise mb-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
          </svg>
          {" Reset"}
        </>
      ),
      type: "btn-outline-danger",
      onClickHandler: (event) => clearForm(event),
      link: "",
    },
    {
      children: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-escape mb-1"
            viewBox="0 0 16 16"
          >
            <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02" />
            <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732z" />
          </svg>
          {simplifiedMenu ? " Full Menu" : " Simplified Menu"}
        </>
      ),
      type: "btn-outline-success",
      onClickHandler: (event) => {
        event.preventDefault();
        setSimplifiedMenu((prev) => !prev);
      },
      link: "",
    },
    {
      children: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clock-history"
            viewBox="0 0 16 16"
          >
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
          </svg>
          {" Conversion History"}
        </>
      ),
      type: "btn-outline-secondary",
      onClickHandler: null,
      link: "/history",
    },
  ];

  const dropDowns = [
    {
      label: "Current Base",
      menuItems: Object.keys(BASES),
      focusedValue: fromBase,
      handleClick: handleFromBaseChangeDropDown,
    },
    {
      label: "New Base",
      menuItems: Object.keys(BASES),
      focusedValue: toBase,
      handleClick: handleToBaseChangeDropDown,
    },
  ];

  // Handlers
  function handleNumberChange(event) {
    setNumber(event.target.value.split(" ").join(""));
  }

  function handleFromBaseChange(event) {
    setFromBase(event.target.value.split(" ").join(""));
  }

  function handleToBaseChange(event) {
    setToBase(event.target.value.split(" ").join(""));
  }

  function handleFromBaseChangeDropDown(textValue) {
    setFromBase(BASES[textValue]);
  }

  function handleToBaseChangeDropDown(textValue) {
    setToBase(BASES[textValue]);
  }

  function clearForm(event) {
    event.preventDefault();
    setNumber("");
    setFromBase("");
    setToBase("");
    setFormError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let validationResult = formValidator(number, fromBase, toBase);

    if (validationResult) {
      setFormError(validationResult);
      return;
    }

    setFormError("");

    let result = convertToBase(number, fromBase, toBase);
    let operation = {
      operationId: Date.now(),
      number,
      fromBase,
      toBase,
      conversionResult: result,
      operationDate: new Date().toLocaleString(),
    };

    setConversionsHistory([...conversionsHistory, operation]);
    getOperationResult(operation);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        inputLabel={"Number"}
        focusedValue={number}
        handleFocusedValueChange={handleNumberChange}
      />

      {simplifiedMenu ? (
        <div className="d-flex gap-2 flex-column">
          {dropDowns.map((dropDown, index) => (
            <DropDownMenu
              key={index}
              label={dropDown.label}
              menuItems={dropDown.menuItems}
              focusedValue={dropDown.focusedValue}
              handleClick={dropDown.handleClick}
            />
          ))}
        </div>
      ) : (
        fields.map((field, index) => (
          <InputField
            key={index}
            inputLabel={field.inputLabel}
            focusedValue={field.focusedValue}
            handleFocusedValueChange={field.handleFocusedValueChange}
          />
        ))
      )}

      {formError && <div className="my-4 alert alert-danger">{formError}</div>}

      <div className="d-flex justify-content-center gap-3 mt-5">
        {buttons.map((button, index) => (
          <Button
            key={index}
            type={button.type}
            onClickHandler={button.onClickHandler}
            link={button.link}
          >
            {button.children}
          </Button>
        ))}
      </div>
    </form>
  );
}
