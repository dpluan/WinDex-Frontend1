import Icon from 'components/general/Icon'
import Logo from 'components/general/Logo'

import * as S from './styles'

export type MenuProps = {
  handleChange?: ()=> void
}
const Menu = ({handleChange}:MenuProps) => (
  <S.Wrapper>
    <S.WrapperLinks>
      <Logo size="Medium" background="None"/>
      <S.Container>
        <S.WrapperIcon onClick={handleChange}>
          <div>
            <Icon source="Graph" size="Small" background="None" />
          </div>
          <S.Span>Markets</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
          <div>
            <Icon source="Exchange" size="Small" background="None"/>
          </div>
          <div>
            <S.Span>Exchange</S.Span>
          </div>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
          <div>
            <Icon source="Wallet" size="Small" background="None"/>
          </div>
          <div>
            <S.Span>Wallets</S.Span>
          </div>

        </S.WrapperIcon>
      </S.Container>
      <S.Container>
        <S.WrapperIcon href="#">
          <div>
            <Icon source="Lending" size="Small" background="None"/>
          </div>
          <S.Span>Lending / Borrow</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
          <div>
            <Icon source="Ido" size="Small" background="None"/>
          </div>
          <S.Span>IDO</S.Span>
        </S.WrapperIcon>
      </S.Container>
      <S.Container>
        <S.WrapperIcon href="#">
          <div>
            <Icon source="LiquidityPool" size="Small" background="None"/>
          </div>
          <S.Span>Liquidity Pools</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
          <div>
            <Icon source="Farming" size="Small" background="None"/>
          </div>
          <S.Span>Farms</S.Span>
        </S.WrapperIcon>
        <S.WrapperIcon href="#">
          <div>
            <Icon source="Help" size="Small" background="None" />
          </div>
          <S.Span>Support</S.Span>
        </S.WrapperIcon>
      </S.Container>
      <S.WrapperIcon onClick={() => console.log("Light Mode")} href="#">
        <div>
          <Icon source="Sun" size="Small" background="LightGray"/>
        </div>
        <S.Span>Dark</S.Span>
      </S.WrapperIcon>
      </S.WrapperLinks>
    <S.WrapperProfile>
      <Icon source="Notifications" size="Small" background="None" />
      <S.Profile src="/img/Avatar.png"/>
    </S.WrapperProfile>
</S.Wrapper>
)

export default Menu
