import { Container, Nav } from "react-bootstrap";
import Welcome from "./Welcome";
import SiteFooter from "./SiteFooter";
import AllTheBooks from "./AllTheBooks";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const SiteMain = (props) => (
  <>
    <Container>
      <Welcome />
      <AllTheBooks title="fantasy" books={fantasy} />
      <AllTheBooks title="history" books={history} />
      <AllTheBooks title="horror" books={horror} />
      <AllTheBooks title="romance" books={romance} />
      <AllTheBooks title="scifi" books={scifi} />
      <SiteFooter>
        <Nav.Item>
          <Nav.Link href="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <p className="m-0">Copyright EPIBOOK</p>
        </Nav.Item>
      </SiteFooter>
    </Container>
  </>
);

export default SiteMain;
