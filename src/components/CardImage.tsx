import { Card, Inset, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  href: string;
  imageURL: string;
}
const CardImage = ({ card }: { card: Props }) => {
  return (
    <Link to={card.href} title={card.title}>
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={card.imageURL}
            alt={card.title}
            className="bg-gray-400 object-cover aspect-video "
          />
        </Inset>
        <Text as="p" size="3">
          {card.title}
        </Text>
      </Card>
    </Link>
  );
};

export default CardImage;
