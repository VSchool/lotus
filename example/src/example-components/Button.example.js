import React, { Fragment } from "react"
import { Button } from "@vschool/lotus"

export default () => (
    <div className="button-container">
        <h1>Buttons</h1>
        <h2>Primary dark buttons</h2>
        <div className="buttons">
            <Button buttonStyle="primary-dark" buttonSize="xl">
                Primary Dark - xl
            </Button>
            <Button buttonStyle="primary-dark" buttonSize="lg">
                Primary Dark - lg
            </Button>
            <Button buttonStyle="primary-dark" buttonSize="md">
                Primary Dark - md
            </Button>
            <Button buttonStyle="primary-dark" buttonSize="sm">
                Primary Dark - sm
            </Button>
        </div>
        <h2>Primary light buttons</h2>
        <div className="buttons">
            <Button buttonStyle="primary-light" buttonSize="xl">
                Primary Light - xl
            </Button>
            <Button buttonStyle="primary-light" buttonSize="lg">
                Primary Light - lg
            </Button>
            <Button buttonStyle="primary-light" buttonSize="md">
                Primary Light - md
            </Button>
            <Button buttonStyle="primary-light" buttonSize="sm">
                Primary Light - sm
            </Button>
        </div>
        <h2>Secondary dark buttons</h2>
        <div className="buttons secondary-dark">
            <Button buttonStyle="secondary-dark" buttonSize="xl">
                Secondary Dark - xl
            </Button>
            <Button buttonStyle="secondary-dark" buttonSize="lg">
                Secondary Dark - lg
            </Button>
            <Button buttonStyle="secondary-dark" buttonSize="md">
                Secondary Dark - md
            </Button>
            <Button buttonStyle="secondary-dark" buttonSize="sm">
                Secondary Dark - sm
            </Button>
        </div>
        <h2>Secondary light buttons</h2>
        <div className="buttons secondary-light">
            <Button buttonStyle="secondary-light" buttonSize="xl">
                Secondary Light - xl
            </Button>
            <Button buttonStyle="secondary-light" buttonSize="lg">
                Secondary Light - lg
            </Button>
            <Button buttonStyle="secondary-light" buttonSize="md">
                Secondary Light - md
            </Button>
            <Button buttonStyle="secondary-light" buttonSize="sm">
                Secondary Light - sm
            </Button>
        </div>

        {/* <div style={{ backgroundColor: "#F6E8F9" }}>
        </div>
        <div style={{ backgroundColor: "#642C6E" }}>
        </div> */}
    </div>
)
