import React from "react";
import {
  Card,
  CardItem,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Thumbnail
} from "native-base";

export const TweetsCard = props => {
  const { tweet } = props;
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            }}
          />
          <Body>
            <Text>{tweet.author}</Text>
            <Text note>GDG Bootcamp</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{tweet.content}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>{tweet.likes}</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
};

export default TweetsCard;
