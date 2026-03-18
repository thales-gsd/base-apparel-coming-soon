import EmailField from '../EmailField/EmailField'
import Info from '../Info/Info'
import Logo from '../Logo/Logo'
import './Content.css'

export default function Content() {
  return (
    <section className="content-containet">
      <Logo />
      <Info />
      <EmailField />
    </section>
  )
};