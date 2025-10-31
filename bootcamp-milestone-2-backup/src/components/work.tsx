/*
    based on resume data, generates a work/job component for resume apge
    @author Amelia Harris
    @version 1.0
*/

import React from "react";
import { Work } from "@/app/resumeData";

export default function WorkPreview(props: Work) {
  return (
    <div>
      <li>
        <b>
          <u>
            {props.title} {props.employer}, {props.location} <i>{props.time}</i>
          </u>
        </b>
        <ul>
          <li>{props.description}</li>
        </ul>
      </li>
    </div>
  );
}
