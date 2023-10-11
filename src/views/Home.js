import React from "react";
import Section from "components/Section";
function Home() {
  const items = [
    {
      id: 1,
      title: "Intro",
      desciription: "Original",
      image:
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvdGlmeSUyMGNvdmVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      type: "album",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
      artist: "John",
    },
    {
      id: 2,
      title: "Intro",
      desciription: "Original",
      image:
        "https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3RpZnklMjBjb3ZlciUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      type: "album",
      src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
      artist: "John",
    },
    {
      id: 3,
      title: "Intro",
      desciription: "Original",
      image:
        "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNwb3RpZnklMjBhbGJ1bSUyMGNvdmVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      type: "artist",
      src: "https://freesound.org/data/previews/612/612085_28867-lq.mp3",
      artist: "John",
    },
    {
      id: 4,
      title: "Intro",
      desciription: "Original",
      image:
        "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3RpZnklMjBjb3ZlciUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      type: "podcast",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      artist: "John",
    },
    {
      id: 5,
      title: "Intro",
      desciription: "Original",
      image:
        "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3RpZnklMjBjb3ZlciUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
