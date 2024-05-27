import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'
import { VelvetBanana } from './VelvetBanana.jsx'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
       BananaTech
          <br />
        Studios
        </h1>
        <p>In React & Threejs —</p>
      </TopLeft>
      <BottomLeft>
        A runtime upcomming Web-App of <a href="https://codeinnovators.vercel.app/">codeinnovators</a>
      </BottomLeft>
      <BottomRight>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <VelvetBanana />
    </Container>
  )
}
