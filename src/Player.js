import React from 'react'
import { Card } from 'react-bootstrap'

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: '18rem',height:'20rem',padding:'5px',
                          justifyContent:'center',alignItems:'center'
                        , margin: '10px', textAlign: 'center',
                          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:'18px' }}>
    <Card.Img variant="top" src={image} style={{width: '10rem',height:'10rem',borderRadius:'30rem'}}  />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Team: {team}
        <br />
        Nationality: {nationality}
        <br />
        Jersey Number: {jerseyNumber}
        <br />
        Age: {age}
      </Card.Text>
    </Card.Body>
  </Card>
  
  )
}

Player.defaultProps = {
    name: "Player Name",
    team: "Team Name",
    nationality: "Nationality",
    jerseyNumber: 0,
    age: 0,
    image: "default-image.jpg",
  };

export default Player