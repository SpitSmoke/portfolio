import { Title as TitleStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = ({ children, fontSize }: Props) => (
  <TitleStyle style={{ fontSize: fontSize }}>{children}</TitleStyle>
)

export default Title
