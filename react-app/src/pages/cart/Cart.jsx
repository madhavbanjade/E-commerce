import React from "react";

const Cart = () => (
  <div className="p-12">
    <table className="w-full border-2 border-slate-800">
      <thead className="border-b-2 border-slate-800 ">
        <tr>
          <th className="text-start px-4 py-2 border-r-2 border-slate-800">Image</th>
          <th className="text-start px-4 py-2 border-r-2 border-slate-800">Product Name</th>
          <th className="text-start px-4 py-2 border-r-2 border-slate-800">Model</th>
          <th className="text-center px-4 py-2 border-r-2 border-slate-800">Quantity</th>
          <th className="text-center px-4 py-2 border-r-2 border-slate-800">Unit Price</th>
          <th className="text-center px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-2 border-slate-800">
          <td className="px-4 py-2 border-r-2 border-slate-800">
            <img src="image_url" alt="product" className="h-16 w-16" />
          </td>
          <td className="px-4 py-2 border-r-2 border-slate-800">Addguri</td>
          <td className="px-4 py-2 border-r-2 border-slate-800">Product 1</td>
          <td className="text-center px-4 py-2 border-r-2 border-slate-800">1</td>
          <td className="text-center px-4 py-2 border-r-2  border-slate-800">Rs.20</td>
          <td className="text-center px-4 py-2">Rs.25</td>
        </tr>
        <tr className="border-b-2 border-slate-800">
          <td className="px-4 py-2 border-r-2 border-slate-800">
            <img src="image_url" alt="product" className="h-16 w-16" />
          </td>
          <td className="px-4 py-2 border-r-2 border-slate-800">Addguri</td>
          <td className="px-4 py-2 border-r-2 border-slate-800">Product 1</td>
          <td className="text-center px-4 py-2 border-r-2 border-slate-800">1</td>
          <td className="text-center px-4 py-2 border-r-2 border-slate-800">Rs.20</td>
          <td className="text-center px-4 py-2">Rs.25</td>
        </tr>
      </tbody>
    </table>
    <div className="flex justify-between p-8">
      <button className="bg-red-600 text-white rounded-full p-3 hover:bg-red-500">
        Continue Shopping
      </button>
      <button className="bg-red-600 text-white rounded-full p-3 hover:bg-red-500">
        Checkout
      </button>
    </div>
    <div>
      <h1 className="font-bold leading-relaxed text-xl">Your Review About this Product?</h1>
      <textarea className="w-full p-2 h-32 resize-none border-2 border-slate-800 rounded-md mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam
        saepe repellendus aperiam hic eos sequi. Earum, in? Saepe optio ab
        aspernatur repellat cupiditate labore, eveniet repellendus vero tempore
        cumque.
      </textarea>
      <button className="bg-red-600 text-white leading-relaxed mt-8 p-2 rounded-lg text-lg hover:bg-red-500">
        Submit
      </button>
    </div>
  </div>
);

export default Cart;
