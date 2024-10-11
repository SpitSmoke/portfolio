import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const PythonIa = () => (
  <Card>
    <Title>Python-AI-Recognition</Title>
    <Paragraph type="secundario">IA built with Jupyter Notebook</Paragraph>
    <LinkButton
      as="a"
      href="https://github.com/SpitSmoke/Python-IA-Reconhecimento"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </LinkButton>
  </Card>
)

export default PythonIa
