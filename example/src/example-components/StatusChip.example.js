import React, { Fragment } from "react"
import { StatusChip } from "@vschool/lotus"

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Status Chips</h1>
            <h3>Props:</h3>
            <p>- status = string/enum</p>
            <p>- err = "string"</p>
            <h2>In Progress - status: "in-progress"</h2>
            <StatusChip status={"in-progress"} />
            <h2>Not Started - status: "not-started"</h2>
            <StatusChip status={"not-started"} />
            <h2>Completed - status: "completed"</h2>
            <StatusChip status={"completed"} />
            <h2>Up Next - status: "up next"</h2>
            <StatusChip status={"up-next"} />
            <h2>Error Message - status: "err"; err: {`"<error message>"`}</h2>
            <StatusChip status={"err"} err={"I am a custom error message"} />
        </Fragment>
    )
}
