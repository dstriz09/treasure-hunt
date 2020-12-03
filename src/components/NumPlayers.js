import React, { useContext, useState } from "react";

export default function NumPlayers({ handleSubmit }) {
  const [option, setOption] = useState(2);

  return (
    <div>
      <p>Welcome to Treasure Hunt! The rules are simple...</p>
      <p>
        I'm baby small batch man braid vape knausgaard cred cornhole waistcoat.
        Single-origin coffee you probably haven't heard of them cardigan cray,
        vexillologist sustainable live-edge gastropub lyft roof party. Polaroid
        direct trade unicorn, vape photo booth poke tumeric banjo literally. Hella
        hell of wayfarers gentrify, narwhal sriracha godard mustache meh cronut. Deep
        v flexitarian godard aesthetic beard four loko.
      </p>
      <p>
        Distillery jean shorts hexagon narwhal scenester schlitz. Before they sold
        out forage plaid jean shorts shaman la croix leggings coloring book. Food
        truck austin activated charcoal paleo celiac try-hard freegan. Actually
        messenger bag sriracha forage sartorial vice scenester tofu narwhal try-hard
        green juice kinfolk XOXO austin. Artisan forage pug selfies quinoa hoodie 3
        wolf moon. Cold-pressed hella man bun tattooed shaman typewriter. Truffaut
        lyft cronut coloring book microdosing woke fixie deep v gochujang etsy vape
        scenester next level. Occupy sriracha vexillologist health goth pabst irony
        hashtag pork belly.
      </p>

      <form onSubmit={(e) => handleSubmit(e, option)}>
        <label>
          How many players?
          <select
            value={option.value}
            onChange={(e) => {
              setOption(e.target.value);
            }}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
