import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { ButtonTheme, Description, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>José Miguel Silva Felicio</Title>
      <Paragraph type="secundario" fontSize={16}>
        SpitSmoke
      </Paragraph>
      <Description type="principal" fontSize={12}>
        Front-end Engineer
      </Description>
      <ButtonTheme>Toggle Theme</ButtonTheme>
    </SideBarContainer>
  </aside>
)

export default Sidebar
