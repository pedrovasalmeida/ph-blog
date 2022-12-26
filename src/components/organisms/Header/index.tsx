import { Logo } from "@/components/atoms/Logo"
import { Search } from "@/components/molecules/Search"
import { SideMenu } from "@/components/molecules/SideMenu"
import { Container } from "./styles"

export function Header() {
  return (
    <Container>
      <SideMenu />
      <Logo />
      <Search />
    </Container>
  )
}
