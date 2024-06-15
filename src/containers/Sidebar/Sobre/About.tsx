import Title from '../../../components/title'
import Paragrafo from '../../../components/paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      I am Professional with a career in evolution in the area of Full Stack
      Java Development. I have as a principle the valuation of overcoming
      obstacles as a source of motivation, to seek the knowledge and resources
      necessary to deal with challenges. I enjoy exercising my skills and
      delving deeper into my area, developing increasing skills in these areas,
      so that being seen as a reference becomes a motivating factor.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oGuilhermeOliveira&layout=compact&langs_count=7&theme=aura" />
    </GithubSecao>
  </section>
)

export default Sobre
