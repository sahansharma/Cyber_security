import React, { useEffect, useState } from 'react';

// Encryption form schemas
const encryptionFormSchemas = {
    caesarCipher: [
        { label: "Plain Text", name: "plainText", type: "text", placeholder: "Enter text to encrypt" },
        { label: "Shift Key", name: "shiftKey", type: "number", placeholder: "Enter shift (e.g., 3)", min: 1, max: 25 }
    ],
    playfairCipher: [
        { label: "Plain Text", name: "plainText", type: "text", placeholder: "Enter text to encrypt" },
        { label: "Keyword", name: "keyword", type: "text", placeholder: "Enter keyword (e.g., SECRET)" },
        { label: "Remove Duplicate Letters", name: "removeDuplicates", type: "checkbox" }
    ],
    hillCipher: [
        { label: "Plain Text", name: "plainText", type: "text", placeholder: "Enter text to encrypt" },
        { label: "Matrix Size", name: "matrixSize", type: "number", placeholder: "Enter matrix size (e.g., 3)", min: 2 },
        { label: "Matrix Key", name: "matrixKey", type: "text", placeholder: "Enter matrix key values (comma-separated)" }
    ],
    vigenereCipher: [
        { label: "Plain Text", name: "plainText", type: "text", placeholder: "Enter text to encrypt" },
        { label: "Keyword", name: "keyword", type: "text", placeholder: "Enter keyword (e.g., SECRET)" }
    ],
    desAlgorithm: [
        { label: "Plain Text", name: "plainText", type: "text", placeholder: "Enter text to encrypt (multiple of 8 characters)" },
        { label: "Key", name: "key", type: "text", placeholder: "Enter 56-bit key", minLength: 7, maxLength: 7 }
    ],
    rsaAlgorithm: [
        { label: "Plain Text", name: "plainText", type: "text", placeholder: "Enter text to encrypt" },
        { label: "Public Key (n)", name: "publicKeyN", type: "number", placeholder: "Enter modulus (n)" },
        { label: "Public Key (e)", name: "publicKeyE", type: "number", placeholder: "Enter public exponent (e)" }
    ]
};

// EncryptionForm component
const EncryptionForm = () => {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
    const [formData, setFormData] = useState({});

    // Handle algorithm selection
    const handleAlgorithmChange = (event) => {
        setSelectedAlgorithm(event.target.value);
        setFormData({}); // Reset form data on algorithm change
    };

    // Handle input changes in the form
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // Implement your encryption logic here
    };

    return (
        <div>
            <h1>Encryption Form</h1>
            <label>
                Choose an encryption algorithm:
                <select onChange={handleAlgorithmChange}>
                    <option value="">Select an algorithm</option>
                    {Object.keys(encryptionFormSchemas).map((key) => (
                        <option key={key} value={key}>
                            {key.replace(/([A-Z])/g, ' $1').trim()} {/* Format to readable text */}
                        </option>
                    ))}
                </select>
            </label>

            {selectedAlgorithm && (
                <form onSubmit={handleSubmit}>
                    <h2>{selectedAlgorithm.replace(/([A-Z])/g, ' $1').trim()} Form</h2>
                    {encryptionFormSchemas[selectedAlgorithm].map((field) => (
                        <div key={field.name}>
                            <label>
                                {field.label}:
                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    min={field.min}
                                    max={field.max}
                                    required
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                    ))}
                    <button type="submit">Encrypt</button>
                </form>
            )}
        </div>
    );
};

export default EncryptionForm;
