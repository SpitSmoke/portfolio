import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSec } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>About me:</Title>
    <Paragraph type="principal">
      Full Stack Web Developer with solid experience in TypeScript, Java,
      Python, and JavaScript, working on the creation of robust and scalable
      solutions for various projects. Proficient in using modern frameworks like
      React, Node.js, and Spring Boot, with skills to develop both on the
      front-end and back-end. With extensive knowledge of HTML5, CSS3,
      Bootstrap, and SASS, I excel in building intuitive and responsive
      interfaces, always focused on delivering the best user experience. I have
      expertise in version control with Git, continuous integration, and setting
      up efficient development environments. Practical experience with tools
      like Visual Studio Code and Figma allows for collaborative development and
      the creation of functional interface designs. I have a strong debugging
      capability, effectively finding and fixing bugs, and maintaining
      high-quality technical documentation. Fluent in English and with
      international experience, I am adaptable to multicultural teams and
      versatile in intercultural communication. I also possess project
      management skills, process organization, and workflow optimization,
      contributing to meeting deadlines and goals. I continuously seek to
      improve processes and apply enhancements in development operations,
      bringing efficiency and innovation to the projects I work on.
    </Paragraph>
    <GithubSec>
      <img src="https://github-readme-stats.vercel.app/api?username=SpitSmoke&show_icons=true&theme=synthwave&include_all_commits=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SpitSmoke&layout=compact&langs_count=7&theme=synthwave" />
    </GithubSec>
  </section>
)

export default Sobre
