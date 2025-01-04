import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddingData.css";

function AddingData({ onProductAdded }) {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    description: "",
    price: "",
    gender: "",
  });

  const [error, setError] = useState("");

  const apiUrls = {
    women: "https://fake-api-e9d32-default-rtdb.firebaseio.com/women",
    men: "https://fake-api-e9d32-default-rtdb.firebaseio.com/men",
    kids: "https://fake-api-e9d32-default-rtdb.firebaseio.com/kid's",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = formData.gender;
    let productId;

    // Set the Firebase ID based on the selected category (gender)
    if (category === "men") {
      productId = "OFgWa3rzuBc8Td5-eKb"; // ID for men
    } else if (category === "women") {
      productId = "OFjiwNPrAss_9gPDUrO"; // ID for women
    } else if (category === "kids") {
      productId = "OFgEnr-pyFjS6EcbuyK"; // ID for kids
    } else {
      setError("Please select a valid gender category.");
      return;
    }

    const apiUrl = `${apiUrls[category]}/${productId}.json`;

    try {
      // Fetch the existing data
      const response = await fetch(apiUrl);
      const existingData = await response.json();

      // If the response is null, initialize it as an empty array
      const currentData = existingData === null ? [] : existingData;

      // Create new product data
      const newProductData = {
        id: new Date().toISOString(), // Generate a unique ID for new product
        image: formData.url,
        name: formData.name,
        description: formData.description,
        price: formData.price,
      };

      // Append the new product to the existing data
      const updatedData = [...currentData, newProductData];

      // Send the updated data back to Firebase DB
      const updateResponse = await fetch(apiUrl, {
        method: "PUT", // Use PUT to overwrite data at the specified location
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!updateResponse.ok) {
        throw new Error("Failed to add product.");
      }

      alert("Product added successfully!");
      setFormData({ url: "", name: "", description: "", price: "", gender: "" });

      // Trigger the update in Product3 (if passed)
      if (onProductAdded) {
        onProductAdded(); // Ensure this triggers a refresh in Product3
      }

      setError("");
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Error adding product. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Add Product</h2>
          <div className="form-group">
            <label>Product URL</label>
            <input
              type="text"
              name="url"
              value={formData.url}
              placeholder="URL"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Product Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Description"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              placeholder="Price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="btns">
            <button type="submit" className="btn" style={{ marginRight: "10px" }}>
              Add
            </button>
            <Link to="/app">
              <button type="button" className="btn">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingData;
