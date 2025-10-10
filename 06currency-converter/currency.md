# 💱 Currency Converter App — Notes

---

## 🧠 Introduction
A **Currency Converter App** helps convert one currency to another using live exchange rates fetched from a public API.  
In this project, we are using the **Fawaz Ahmed Currency API** for real-time conversion.

---

## 🌐 API Link
We use the following API endpoint to fetch conversion rates dynamically:
```js
let url = `https://v6.exchangerate-api.com/v6/34c091afcad3a15de0b470df/latest/${currency}`
```
## Input Box Component
```
function InputBox({
    label,
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    <option value="usd">
                        usd
                    </option>
                </select>
            </div>
        </div>
    );
}

export default InputBox;
```

## App.js Component
```
function App() {
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
```