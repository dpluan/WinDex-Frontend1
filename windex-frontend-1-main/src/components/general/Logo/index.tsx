import * as S from './styles'
export type LogoProps = {
  size?: "XSmall" | "Small" | "Medium" | "Large",
  background?: "DarkGray" | "LightGray" | "None" | "Primary" | "Gray"
  action?: () => void
}

const Logo = ({background = "DarkGray", size = "Medium", action}:LogoProps) => (
  <S.Wrapper background={background} size={size} onClick={action}>
    <S.Image src={`/img/icons/Logo.svg`}  />
  </S.Wrapper>
)

export default Logo
