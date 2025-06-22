import React, { useState } from "react";

const App = () => {
  const [currency, setCurrency] = useState("USD");

  const products = [
    { id: 1, name: "Product A", priceUSD: 10, priceBDT: 1100 },
    { id: 2, name: "Product B", priceUSD: 20, priceBDT: 2200 },
    { id: 3, name: "Product C", priceUSD: 15, priceBDT: 1650 },
  ];

  return (
    <div className="p-6">
      {/* Currency Selector */}
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border px-4 py-2 mb-4 rounded"
      >
        <option value="USD">USD</option>
        <option value="BDT">BDT</option>
      </select>

      {/* Product List */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-700">
              {currency === "USD"
                ? `$${product.priceUSD}`
                : `৳${product.priceBDT}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
