import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function emojiEntry(emote) {
  return ( <Entry 
    key={emote.id}
    emoji={emote.emoji}
    name={emote.name}
    meaning={emote.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(emojiEntry)}
      </dl>
    </div>
  );
}

export default App;
