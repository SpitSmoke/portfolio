import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const PythonChat = () => (
  <Card>
    <Title>Python-Chat</Title>
    <Paragraph type="secundario">Chat built with python code</Paragraph>
    <LinkButton
      as="a"
      href="https://github.com/SpitSmoke/Chat-com-python"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </LinkButton>
  </Card>
)

export default PythonChat
