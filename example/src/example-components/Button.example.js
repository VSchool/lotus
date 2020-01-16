import React, { Fragment } from "react"
import { Button } from "@vschool/lotus"
import styled from "styled-components"

export default () => (
    <Fragment>
        <Button buttonStyle="primary-dark" buttonSize="sm" uppercase>
            Hello world blah blah blah!
        </Button>
        <br />
        <Button buttonStyle="primary-light" buttonSize="md">
            Hello world!
        </Button>
        <br />
        <div style={{ backgroundColor: "#F6E8F9" }}>
            <Button buttonStyle="secondary-dark" buttonSize="lg">
                Hello world!
            </Button>
        </div>
        <div style={{ backgroundColor: "#642C6E" }}>
            <Button buttonStyle="secondary-light" buttonSize="xl">
                Hello world!
            </Button>
        </div>
    </Fragment>
)
