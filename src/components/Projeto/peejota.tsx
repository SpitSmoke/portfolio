import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Peejota = () => (
  <Card>
    <Title>Front-end </Title>
    <Paragraph type="secundario">built with JS, React & CSS </Paragraph>
    <LinkButton
      as="a"
      href="https://github.com/SpitSmoke/PEEJOTA"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </LinkButton>
  </Card>
)

export default Peejota
