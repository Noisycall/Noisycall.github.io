import React, { Component } from "react";
import { Card, CardColumns, Container, ResponsiveEmbed } from "react-bootstrap";
import team from "./team.json";

class Team extends Component {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <Container>
        <CardColumns>
          {team["team"].map((person: any) => {
            return (
              <Card>
                <ResponsiveEmbed aspectRatio="1by1">
                  <Card.Img
                    src={`${process.env.PUBLIC_URL}/team/${person["Name"]}.jpeg`}
                    alt={person["Name"]}
                  />
                </ResponsiveEmbed>
                <Card.Header>{person["Name"]}</Card.Header>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    );
  }
}
export default Team;
