import React from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";




const fetchItemsById = async (id) => {
  const response = await axios.get(`http://localhost:3001/items/${id}`);
  return response.data;
};

const MultipleItems = ({ itemIds }) => {
  const itemQueries = useQueries({
    queries: itemIds.map((id) => ({
      queryKey: ["items", id],
      queryFn: () => fetchItemsById(id),
      staleTime: 50000,
    })),
  });

  const isLoading = itemQueries.some((query) => query.isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  }



     const [items, setItems] = useState([]); // State for the array
     const [inputValue, setInputValue] = useState(""); // State for the input field

     const handleSubmit = (e) => {
       e.preventDefault(); // Prevent form submission from reloading the page

       if (inputValue.trim()) {
         // Update the array immutably
         setItems((prevItems) => [...prevItems, inputValue.trim()]);
         setInputValue(""); // Clear the input field
       }

       console.log("Input Value:", inputValue); // Log the input value
     };

     const handleInputChange = (e) => {
       setInputValue(e.target.value); // Update the input value state
     };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="w-25 my-2">
        <div className="d-flex justify-content-start align-items-center">
          <input
            className="form-control form-control-sm"
            type="text"
            name="inputValue"
            placeholder="Input Id number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-sm btn-secondary w-50">
            Fetch Data
          </button>
        </div>
      </form>
      <h4>Item Details</h4>
      <div className="row row-cols-lg-4 row-cols-4 row-cols-md-2 row-cols-sm-1 g-3">
        {itemQueries.map((query, index) => (
          <div className="col">
            <div
              key={itemIds[index]}
              className="border p-2 bg-secondary-subtle rounded text-center item-box"
            >
              <h5>Id Number : {itemIds[index]}</h5>
              <span>Name : {query.data.name}</span> <br />
              <span> Color : {query.data.color}</span> <br />
              <span> Vitamin :{query.data.vitamin}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UseQueriesDemo = () => {
  const itemIds = [];
  console.log(itemIds);

  return (
    <div className="container">
      <h3>Use Queries Demo</h3>
      <MultipleItems itemIds={itemIds} />
    </div>
  );
};

export default UseQueriesDemo;
