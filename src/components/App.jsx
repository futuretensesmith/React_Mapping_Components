import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//***** Each child in a list *******
//should have a unique "key" prop */
// we are passing in each prop into the function createEntry()
//from the Entry component. Then we are passing the createEntry function
//into the map() to get hold of emojiTerm

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
      aria-label={emojiTerm.name}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

{
  //****** pre-mapped hardcoded tester function ******
  /* function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div>
        <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
          aria-label={emojipedia[1].name}
        />
      </dl>
    </div>
  );
} */
}

export default App;
