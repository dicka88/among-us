type Character = {
  name: string;
  files: {
    png: string;
    svg: string;
  };
};

type Chars = {
  [type: string]: Character[];
};

const chars: Chars = {
  crewmate: [
    {
      name: "Red",
      files: {
        png: "/characters/png/crewmate/red.png",
        svg: "/characters/svg/crewmate/red.svg",
      },
    },
    {
      name: "Pink",
      files: {
        png: "/characters/png/crewmate/pink.png",
        svg: "/characters/svg/crewmate/pink.svg",
      },
    },
    {
      name: "Green",
      files: {
        png: "/characters/png/crewmate/green.png",
        svg: "/characters/svg/crewmate/green.svg",
      },
    },
    {
      name: "Yellow",
      files: {
        png: "/characters/png/crewmate/yellow.png",
        svg: "/characters/svg/crewmate/yellow.svg",
      },
    },
    {
      name: "Cyan",
      files: {
        png: "/characters/png/crewmate/cyan.png",
        svg: "/characters/svg/crewmate/cyan.svg",
      },
    },
    {
      name: "Black",
      files: {
        png: "/characters/png/crewmate/black.png",
        svg: "/characters/svg/crewmate/black.svg",
      },
    },
    {
      name: "Dark Green",
      files: {
        png: "/characters/png/crewmate/dark-green.png",
        svg: "/characters/svg/crewmate/dark-green.svg",
      },
    },
    {
      name: "Brown",
      files: {
        png: "/characters/png/crewmate/brown.png",
        svg: "/characters/svg/crewmate/brown.svg",
      },
    },
    {
      name: "Purple",
      files: {
        png: "/characters/png/crewmate/purple.png",
        svg: "/characters/svg/crewmate/purple.svg",
      },
    },
    {
      name: "Orange",
      files: {
        png: "/characters/png/crewmate/orange.png",
        svg: "/characters/svg/crewmate/orange.svg",
      },
    },
  ],
  skin: [
    {
      name: "Octocat",
      files: {
        png: "/characters/png/skin/octocat.png",
        svg: "/characters/svg/skin/octocat.svg",
      },
    },
    {
      name: "Grommet",
      files: {
        png: "/characters/png/skin/grommet.png",
        svg: "/characters/svg/skin/grommet.svg",
      },
    },
    {
      name: "Burger",
      files: {
        png: "/characters/png/skin/burger.png",
        svg: "/characters/svg/skin/burger.svg",
      },
    },
    {
      name: "Pikachu",
      files: {
        png: "/characters/png/skin/pikachu.png",
        svg: "/characters/svg/skin/pikachu.svg",
      },
    },
    {
      name: "Shark",
      files: {
        png: "/characters/png/skin/shark.png",
        svg: "/characters/svg/skin/shark.svg",
      },
    },
    {
      name: "Patrick",
      files: {
        png: "/characters/png/skin/patrick.png",
        svg: "/characters/svg/skin/patrick.svg",
      },
    },
    {
      name: "Lemon Juicy",
      files: {
        png: "/characters/png/skin/lemon-juice.png",
        svg: "/characters/svg/skin/lemon-juice.svg",
      },
    },
    {
      name: "Moby",
      files: {
        png: "/characters/png/skin/moby.png",
        svg: "/characters/svg/skin/moby.svg",
      },
    },
    {
      name: "Red Bird",
      files: {
        png: "/characters/png/skin/red-bird.png",
        svg: "/characters/svg/skin/red-bird.svg",
      },
    },
    {
      name: "Bugcat",
      files: {
        png: "/characters/png/skin/bugcat.png",
        svg: "/characters/svg/skin/bugcat.svg",
      },
    },
    {
      name: "Kyubi",
      files: {
        png: "/characters/png/skin/kyubi.png",
        svg: "/characters/svg/skin/kyubi.svg",
      },
    },
    {
      name: "Devil",
      files: {
        png: "/characters/png/skin/devil.png",
        svg: "/characters/svg/skin/devil.svg",
      },
    },
    {
      name: "Angel",
      files: {
        png: "/characters/png/skin/angel.png",
        svg: "/characters/svg/skin/angel.svg",
      },
    },
    {
      name: "Doraemon",
      files: {
        png: "/characters/png/skin/doraemon.png",
        svg: "/characters/svg/skin/doraemon.svg",
      },
    },
    {
      name: "Die",
      files: {
        png: "/characters/png/skin/die.png",
        svg: "/characters/svg/skin/die.svg",
      },
    },
    {
      name: "Bears",
      files: {
        png: "/characters/png/skin/bears.png",
        svg: "/characters/svg/skin/bears.svg",
      },
    },
    {
      name: "Tinky Winky",
      files: {
        png: "/characters/png/skin/tinky-winky.png",
        svg: "/characters/svg/skin/tinky-winky.svg",
      },
    },
    {
      name: "Pink Cat",
      files: {
        png: "/characters/png/skin/pink-cat.png",
        svg: "/characters/svg/skin/pink-cat.svg",
      },
    },
  ],
  pet: [
    {
      name: "Mini Crewmate",
      files: {
        png: "/characters/png/pet/mini-crewmate-pet.png",
        svg: "/characters/svg/pet/mini-crewmate-pet.svg",
      },
    },
    {
      name: "Ant",
      files: {
        png: "/characters/png/pet/ant-pet.png",
        svg: "/characters/svg/pet/ant-pet.svg",
      },
    },
    {
      name: "Amazon Box",
      files: {
        png: "/characters/png/pet/amazon-box-pet.png",
        svg: "/characters/svg/pet/amazon-box-pet.svg",
      },
    },
    {
      name: "Bugcat",
      files: {
        png: "/characters/png/pet/bugcat-pet.png",
        svg: "/characters/svg/pet/bugcat-pet.svg",
      },
    },
    {
      name: "Car",
      files: {
        png: "/characters/png/pet/car-pet.png",
        svg: "/characters/svg/pet/car-pet.svg",
      },
    },
    {
      name: "Dinopan",
      files: {
        png: "/characters/png/pet/dinopan-pet.png",
        svg: "/characters/svg/pet/dinopan-pet.svg",
      },
    },
    {
      name: "Fugy",
      files: {
        png: "/characters/png/pet/fugy-pet.png",
        svg: "/characters/svg/pet/fugy-pet.svg",
      },
    },
    {
      name: "Grommet",
      files: {
        png: "/characters/png/pet/grommet-pet.png",
        svg: "/characters/svg/pet/grommet-pet.svg",
      },
    },
    {
      name: "Hame",
      files: {
        png: "/characters/png/pet/hame-pet.png",
        svg: "/characters/svg/pet/hame-pet.svg",
      },
    },
    {
      name: "Jelly Fish",
      files: {
        png: "/characters/png/pet/jelly-fish-pet.png",
        svg: "/characters/svg/pet/jelly-fish-pet.svg",
      },
    },
    {
      name: "Pou",
      files: {
        png: "/characters/png/pet/pou-pet.png",
        svg: "/characters/svg/pet/pou-pet.svg",
      },
    },
    {
      name: "Shark",
      files: {
        png: "/characters/png/pet/shark-pet.png",
        svg: "/characters/svg/pet/shark-pet.svg",
      },
    },
    {
      name: "Slime",
      files: {
        png: "/characters/png/pet/slime-pet.png",
        svg: "/characters/svg/pet/slime-pet.svg",
      },
    },
    {
      name: "Stickman",
      files: {
        png: "/characters/png/pet/stickman-pet.png",
        svg: "/characters/svg/pet/stickman-pet.svg",
      },
    },
  ],
};

export default chars;
