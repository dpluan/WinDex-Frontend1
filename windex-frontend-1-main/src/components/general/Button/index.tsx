import * as S from './styles'

export type ButtonProps = {
  title: string
  size?: 'Small' | 'Medium' | 'Large',
  darkMode?: boolean
  fullWidth?: boolean
  type?: "submit" | "button"
  click?: (action) => void
}

const Button = ({ title = "Button", size = "Medium", darkMode = true, fullWidth = false, click = null, type="button"}: ButtonProps) => (
  <S.Wrapper type={type} size={size} darkMode={darkMode} fullWidth={fullWidth} onClick={click} >
    {title}
</S.Wrapper>
)

export default Button
