import React from "react";
import styled from "styled-components";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: blue;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
 
`
const Button2 = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export const Test: React.FC = () => {


    return (
        <>
            <div>
                <Button
                    href="/home"
                    target="_self"
                    rel="noopener"
                    primary
                >
                    GitHub
            </Button>
            </div>
            <Button2 primary>Hei</Button2>
        </>
    )
}
