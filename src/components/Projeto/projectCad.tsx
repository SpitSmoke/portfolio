import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const ProjectCad = () => (
  <Card>
    <Title>User registration(Data Base)</Title>
    <Paragraph type="secundario">
      User Registration build with JavaScript and React
    </Paragraph>
    <LinkButton
      as="a"
      href="https://github.com/SpitSmoke/cadastroDeUsuarios"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </LinkButton>
  </Card>
)

export default ProjectCad
