import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { ButtonTheme, Description, SideBarContainer } from './styles'

type Props = {
  themeChange: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>José Miguel Silva Felicio</Title>
      <Paragraph type="secundario" fontSize={16}>
        SpitSmoke
      </Paragraph>
      <Description type="principal" fontSize={12}>
        Full Stack Engineer
      </Description>
      <ButtonTheme onClick={props.themeChange}>Toggle Theme</ButtonTheme>
    </SideBarContainer>
  </aside>
)

export default Sidebar
