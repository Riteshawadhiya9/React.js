import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  // ✅ Local functions to handle +1 / -1 with single click only
  const handleIncrease = () => {
    const newValue = Number(amount) + 1;
    if (onAmountChange && newValue >= 0) onAmountChange(newValue);
  };

  const handleDecrease = () => {
    const newValue = Number(amount) - 1;
    if (onAmountChange && newValue >= 0) onAmountChange(newValue);
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>

        {/* ✅ Added + / - buttons to control one-step increase/decrease */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDecrease}
            disabled={amountDisable}
            className="bg-gray-200 px-2 rounded hover:bg-gray-300"
          >
            -
          </button>

          <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5 text-center"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            min="0" // ✅ Prevent negative numbers directly in input
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= 0 && onAmountChange) onAmountChange(val);
            }}
          />

          <button
            type="button"
            onClick={handleIncrease}
            disabled={amountDisable}
            className="bg-gray-200 px-2 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
