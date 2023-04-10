import Logo from  '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div className='logo'>
          <img src={Logo} alt="moneycomb" />
          <h1>Moneycomb</h1>
        </div>
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}