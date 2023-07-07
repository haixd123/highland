import Button from 'react-bootstrap/Button';
import { styled } from 'styled-components';

const BaseButton = () => {
  return <StyledButton variant="primary">Base Button 1</StyledButton>
}

export default BaseButton;

export const StyledButton = styled(Button)`
  background-color: red;  
`;