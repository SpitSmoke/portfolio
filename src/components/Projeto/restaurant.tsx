import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Restaurant = () => (
  <Card>
    <Title>Front-End Page For a Restaurant</Title>
    <Paragraph type="secundario">Built with Html JavaScript & CSS</Paragraph>
    <LinkButton
      as="a"
      href="https://github.com/SpitSmoke/Restaurante"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </LinkButton>
  </Card>
)

export default Restaurant
