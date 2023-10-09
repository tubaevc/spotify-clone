import React from "react";
import Section from "components/Section";
function Home() {
  const items = [
    {
      id: 1,
      title: "Intro",
      desciription: "Original",
      image: "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
      type: "album",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
      artist: "John",
    },
    {
      id: 2,
      title: "Intro",
      desciription: "Original",
      image: "https://i.scdn.co/image/d39397d2f6a1525b3fe90369c89ea2d94aac5714",
      type: "album",
      src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
      artist: "John",
    },
    {
      id: 3,
      title: "Intro",
      desciription: "Original",
      image: "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
      type: "artist",
      src: "https://freesound.org/data/previews/612/612085_28867-lq.mp3",
      artist: "John",
    },
    {
      id: 4,
      title: "Intro",
      desciription: "Original",
      image: "https://i.scdn.co/image/d39397d2f6a1525b3fe90369c89ea2d94aac5714",
      type: "podcast",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      artist: "John",
    },
    {
      id: 5,
      title: "Intro",
      desciription: "Original",
      image: "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
      type: "album",
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
      artist: "John",
    },
  ];
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/" items={items} />
      <Section title="Shows to try" more="/" items={items} />
      <Section title="Made for Tuba " more="/" items={items} />
    </div>
  );
}

export default Home;
