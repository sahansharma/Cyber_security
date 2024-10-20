import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:9000/"; // Replace with the correct API endpoint

const Encryption = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEncData = async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // End loading
        }
    };

    // Use useEffect to call the function once on component mount
    useEffect(() => {
        fetchEncData();
    }, []); // Empty dependency array to ensure it runs only once

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Encryption</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available</p>}
        </div>
    );
};

export default Encryption;
