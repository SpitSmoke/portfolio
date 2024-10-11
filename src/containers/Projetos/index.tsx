import Projeto from '../../components/Projeto'
import Peejota from '../../components/Projeto/peejota'
import ProjectCad from '../../components/Projeto/projectCad'
import PythonIa from '../../components/Projeto/pythonIa'
import Restaurant from '../../components/Projeto/restaurant'
import SearchZip from '../../components/Projeto/searchZip'
import Title from '../../components/Title'
import { List } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projects</Title>
    <List>
      <li>
        <Projeto />
      </li>
      <li>
        <ProjectCad />
      </li>
      <li>
        <SearchZip />
      </li>
      <li>
        <PythonIa />
      </li>
      <li>
        <Restaurant />
      </li>
      <li>
        <Peejota />
      </li>
    </List>
  </section>
)
export default Projetos
