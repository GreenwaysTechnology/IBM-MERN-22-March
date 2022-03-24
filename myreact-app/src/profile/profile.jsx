import { Name } from "./Name";
import React from "react";

export const Profile = props => <div>
    <h1>Profile Details</h1>
    <h4>id {props.id}</h4>
    <Name firstName={props.firstName} lastName={props.lastName} middleName={props.middleName} />
</div>