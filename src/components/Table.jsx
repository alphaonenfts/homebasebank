import React, { useState } from "react";

const Table = () => {
  const [formData, setFormData] = useState({});

  const categories = [
    "General Knowledge",
    "Verbal Ability",
    "Technical Knowledge",
    "Education & Experience",
    "Personality & Appearance",
  ];

  const subCategories = {
    "General Knowledge": [
      "Knowledge of Current Affairs",
      "Estimate of Intelligence",
    ],
    "Verbal Ability": [
      "Ability to Understand Questions & Respond",
    ],
    "Technical Knowledge": [
      "Job Knowledge",
      "Quick Learning Ability",
    ],
    "Education & Experience": [
      "Suitability for Job",
    ],
    "Personality & Appearance": [
      "Confidence",
      "Neat & Pleasant",
    ],
  };

  const handleChange = (category, subCategory, value) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [subCategory]: value,
      },
    });
  };

  return (
    <div>
      <h2>Interview Evaluation Form</h2>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Score (1-10)</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            subCategories[category].map((subCategory, index) => (
              <tr key={`${category}-${index}`}>
                {index === 0 && (
                  <td rowSpan={subCategories[category].length}>{category}</td>
                )}
                <td>{subCategory}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData[category]?.[subCategory] || ""}
                    onChange={(e) =>
                      handleChange(category, subCategory, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
