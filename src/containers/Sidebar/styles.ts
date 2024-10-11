import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ButtonTheme = styled.button`
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weigth: bold;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
