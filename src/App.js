import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CustomAccordion } from "./components/CustomAccordion";
import { CustomBreadcrumbs } from "./components/BreadСrumbs";
import { Support } from "./components/Support";
import { Partners } from "./components/Partners";
import { questions } from "./data";
import { Container } from "./components/Container";
import { StickyContainer, Sticky } from "react-sticky";
import { CustomFilter } from "./components/CustomFilter";
import { Title, Link, LeftMenu } from "./App.components";

function App() {
  return (
    <StickyContainer>
      <div className="App">
        <Header />
        <Container>
          <CustomBreadcrumbs />
          <Title>Frequently asked questions</Title>
          <CustomFilter />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "inherit",
            }}
          >
            <Sticky disableCompensation>
              {() => (
                <LeftMenu>
                  {questions.map((el, id) => {
                    return (
                      <Link
                        active={window.location.hash === `#${id}`}
                        href={`#${id}`}
                        key={id}
                      >
                        {el.title}
                      </Link>
                    );
                  })}
                </LeftMenu>
              )}
            </Sticky>

            <div>
              {questions.map((el, id) => {
                return <CustomAccordion key={id} id={id} el={el} />;
              })}
            </div>
          </div>
          <Support />
        </Container>
        <Partners />
        <Footer />
      </div>
    </StickyContainer>
  );
}

export default App;
