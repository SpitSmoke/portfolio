import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const SearchZip = () => (
  <Card>
    <Title>Search Zip-codes</Title>
    <Paragraph type="secundario">Build with JavaScript Html & css</Paragraph>
    <LinkButton
      as="a"
      href="https://github.com/SpitSmoke/ProcuraCEP"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </LinkButton>
  </Card>
)

export default SearchZip
