/*
    based on resume data, generates a school component for the resume page
    @author Amelia Harris
    @version 1.0
*/

import React from "react";

import { School } from "@/app/resumeData";

export default function SchoolPreview(props: School) {
  return (
    <div>
      <li>
        <b>
          <u>
            {props.name}, {props.location} <i>{props.years}</i>
          </u>
        </b>
        <ul>
          <li>
            <i>
              <u>{props.majorAmount}</u>
            </i>{" "}
            {props.major}
          </li>
          <li>
            <i>
              <u>Relevant Coursework:</u>
            </i>{" "}
            {props.coursework}
          </li>
        </ul>
      </li>
    </div>
  );
}
