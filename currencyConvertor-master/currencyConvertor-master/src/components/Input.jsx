import React from "react";

function InputBox({
    label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],  // Fixed the prop name to match App.jsx
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = '',
}) {
    return (
        <div className={`bg-slate-400 p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black mb-2 inline-block font-semibold text-xl">
                    {label}
                </label>
                <input
                    className="text-black outline-none w-full bg-transparent py-1.5 font-semibold"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full font-semibold text-xl">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  // Fixed here
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
