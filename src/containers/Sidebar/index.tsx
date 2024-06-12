import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'
import Avatar from '../Avatar'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>Guilherme Oliveira</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        oGuilhermeOliveira
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
