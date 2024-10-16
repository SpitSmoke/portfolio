import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Projeto = () => (
  <Card>
    <Title>To-do List Project</Title>
    <Paragraph type="secundario">To-do List built with VueJS</Paragraph>
    <LinkButton
      as="a"
      href="https://github.com/SpitSmoke/exercicioVue"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </LinkButton>
  </Card>
)

export default Projeto
