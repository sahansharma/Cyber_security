import styled from "styled-components";
import React from "react";

const SearchResult =  ({data}) =>{
    return (
        <EncCardContainer>
            <EncCards>
                {
                    data?.map((data)=>(
                        <EncCard key = {data.name}>
                            {data.description}
                        </EncCard>
                    ))
                }
            </EncCards>
        </EncCardContainer>
    );
};
export default SearchResult;
const EncCardContainer=styled.section`
    height: calc(100vh-210px);
    background-color: green;
    background-size:cover;
`;
const EncCards = styled.div``;
const EncCard = styled.div``;