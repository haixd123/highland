import { styled } from "styled-components";

const HomePage = () => {
    return (
        <StyledContainer>
            Home Page
        </StyledContainer>
    )
}

export default HomePage;

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;