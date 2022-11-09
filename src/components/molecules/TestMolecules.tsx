import styled from '@emotion/styled';

const TestDiv = styled.div`
    margin: 20px 0;
    p {
        font-size: 30px;
    }
`;
export const TestMolecules = () => {
    return (
        <TestDiv>
            <p>Component Test</p>
        </TestDiv>
    );
};
