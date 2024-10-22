import styled from "styled-components";
import React from "react";
import { BASE_URL } from "./Encryption";

const SearchResult =  ({data}) =>{
    return (
        <EncCardContainer>
            <EncCards>
                {
                    data?.map((data)=>(
                        <EncCard key = {data.name}>
                            <div className="enc_image">
                                <img src={BASE_URL+"images/"+data.image} alt="encryption_data_image" />
                            </div>
                            <div className="Enc_info">
                                <div className="info">
                                    <h3>{data.name}</h3>
                                    <p><b>Encryption Category ~</b>{data.category}</p>
                                    <p><b>Data Type ~</b>{data.type}</p>
                                    <p><b>Encryption Type ~</b>{data.encryptionType}</p>
                                </div>
                                <button>Start Encryption</button>
                            </div>
                        </EncCard>
                    ))
                }
            </EncCards>
        </EncCardContainer>
    );
};
export default SearchResult;
const EncCardContainer = styled.section`
    height: calc(100vh - 210px);
    width: 100%;
    display: flex;
    
    gap: 16px;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`;

const EncCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px 40px; /* First value is vertical gap, second is horizontal gap */
    max-width: 1200px;
    width: 70%;
    justify-items: center;
`;

const EncCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 16px;
    background: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 300px;
`;

