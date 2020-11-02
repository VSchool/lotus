import React, { useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import {
    blue,
    Card,
    CardGroup,
    CheckboxRadioGroup,
    Checkbox,
    Radio,
    TextInput,
    Textarea,
    TextButton,
} from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Logo = styled.div`
    width: 64px;
    height: 64px;
    background-color: red;
    margin-bottom: 8px;
`

const Title = styled.h5`
    margin-bottom: 8px;
`

const Button = styled(TextButton)`
    margin-top: auto;
`

const Text = styled.p`
    margin-bottom: 16px;
`

const BoxGroup = styled(CheckboxRadioGroup)`
    margin-bottom: 100px;
`

function InputExample() {
    return (
        <Container>
            <CardGroup>
                <StyledCard>
                    <Logo />
                    <Title>Card 1</Title>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eaque at est
                        vel fugiat tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem, hic. Rerum dignissimos deserunt reprehenderit maiores quo minima, omnis
                        at earum tenetur natus cum debitis, aspernatur voluptatibus unde odit itaque
                        expedita?
                    </Text>
                    <Button>Learn More</Button>
                </StyledCard>
                <StyledCard>
                    <Logo />
                    <Title>Card 1</Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores
                        explicabo earum magnam libero illo corrupti. Iste distinctio, ab est
                        nesciunt, earum amet sed cupiditate accusantium nihil explicabo voluptatum
                        enim? Dolor dicta fugit laboriosam consectetur nobis quaerat facere
                        aspernatur distinctio?
                    </Text>
                    <Button>Learn More</Button>
                </StyledCard>
                <StyledCard>
                    <Logo />
                    <Title>Card 1</Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                        perspiciatis ducimus vitae nemo tenetur nobis at modi sed aut cum
                        necessitatibus soluta, earum hic libero!
                    </Text>
                    <Button>Learn More</Button>
                </StyledCard>
                <StyledCard>
                    <Logo />
                    <Title>Card 1</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque
                        quasi, commodi illo quibusdam ut vel placeat a accusamus alias.
                    </Text>
                    <Button>Learn More</Button>
                </StyledCard>
            </CardGroup>
        </Container>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
