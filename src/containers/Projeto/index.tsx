import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title fontSize={16}>Projeto lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
