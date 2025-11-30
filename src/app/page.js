import { Base } from "@/components/Base";


export default function Home() {
  const componentData = {
    name: "Super",
    count: 30,
    images: [
      {
        url: "https://imgs.search.brave.com/hay-HxCMOmpUNxJlVO109_kWOMjyUDYSKJuiZFzxve0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bWFnaWNkZWNvci5p/bi9jb20vMjAyMy8w/Mi8yOTE3NTkwNy9p/bWFnZS0xNjkwMzY4/Mzg4LTU3OS0zMjB4/MzIwLmpwZw",
        ready: true,
        error: false
      },
      {
        url: "https://imgs.search.brave.com/O6CaUb_HsL1gObywwTp9xKI2rjYwSpGrJ51_ijLwPeY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQxLzM5LzIw/LzM2MF9GXzU0MTM5/MjAxNl9FODhRcDRv/aEh3VHVOZE5IcFNJ/Qkk3aGVZTzJMNEdi/Mi5qcGc",
        ready: true,
        error: false
      },
      {
        url: "",
        ready: false,
        error: true
      },
      {
        url: "",
        ready: false,
        error: false
      }
    ]
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Base data={componentData} />
    </div>
  );
}





