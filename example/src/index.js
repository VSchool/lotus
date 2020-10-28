import React, { useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Card, CardGroup } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

const StyledCard = styled(Card)`
    width: 412px;
`

const Container = styled.section`
    padding: 25px;
    display: flex;
    flex-direction: column;
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

const Button = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: blue;
    letter-spacing: 0.25px;
`

function InputExample() {
    return (
        <>
            <h1>This is a header</h1>
            <br />
            <br />
            <Container>
                <CardGroup>
                    <Card>
                        <Logo />
                        <Title>Web Development 1</Title>
                        <p>
                            Learn JavaScript and build a career in code with our accelerated Full
                            Stack JavaScript course.
                        </p>
                        <Button>Learn More</Button>
                    </Card>
                    <Card>
                        <Logo />
                        <Title>Web Development 2</Title>
                        <p>
                            Learn JavaScript and build a career in code with our accelerated Full
                            Stack JavaScript course.
                        </p>
                        <Button>Learn More</Button>
                    </Card>
                    <Card>
                        <Logo />
                        <Title>Web Development 3</Title>
                        <p>
                            Learn JavaScript and build a career in code with our accelerated Full
                            Stack JavaScript course.
                        </p>
                        <Button>Learn More</Button>
                    </Card>
                </CardGroup>
            </Container>
            <br />
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur quibusdam
                atque. Illum, laborum! Minima illum eaque, nostrum blanditiis vitae laboriosam saepe
                autem, possimus quod placeat temporibus inventore, minus unde!
            </p>
        </>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
