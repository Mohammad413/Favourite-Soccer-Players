import React from "react";
import { useState } from "react";
import { People } from "./people.js";
import { List } from "./list";
let Forms = () => {
  let [people, setPeople] = useState(People);

  return (
    <section>
      <h3> {People.length} Best Football Players</h3>
      <List peo={people} />
      <button id="but" onClick={() => setPeople([])}>
        clear all
      </button>
    </section>
  );
};
export { Forms };
