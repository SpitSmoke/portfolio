import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSec } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim:</Title>
    <Paragraph type="sencudario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
      praesentium aut repudiandae ut laborum cupiditate laboriosam magnam fugit
      dolorum, consequuntur quia aliquid veniam nulla voluptatum id atque magni
      quod dolores!
    </Paragraph>
    <GithubSec>
      <img src="https://github-readme-stats.vercel.app/api?username=SpitSmoke&show_icons=true&theme=synthwave&include_all_commits=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SpitSmoke&layout=compact&langs_count=7&theme=synthwave" />
    </GithubSec>
  </section>
)

export default Sobre
