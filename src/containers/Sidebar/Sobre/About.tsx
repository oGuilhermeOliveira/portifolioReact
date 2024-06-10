import Title from '../../../components/title'
import Paragrafo from '../../../components/paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta,
      quos repellat nam laboriosam explicabo, accusantium error nisi iure
      consectetur animi accusamus consequatur omnis, ducimus sed modi deserunt
      dignissimos voluptates.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oGuilhermeOliveira&layout=compact&langs_count=7&theme=aura" />
    </GithubSecao>
  </section>
)

export default Sobre
