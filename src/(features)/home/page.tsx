import { Container, Grid } from "@radix-ui/themes";
import CardImage from "../../components/CardImage";
import { cardData } from "./data/cardData";

const HomePage = () => {
  return (
    <Container>
      <Grid columns={{ initial: "2", md: "3", lg: "4", xl: "5" }}>
        {cardData.map((card) => (
          <CardImage card={card} key={card.title} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
