import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'
import Avatar from '../Avatar'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
