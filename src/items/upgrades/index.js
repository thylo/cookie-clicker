const upgrades = [
  {
    name: "Beretta 9mm",
    gain: 1,
    price: 9,
    count: 0,
    image: "/images/beretta.png"
  },
  {
    name: "Ingram uzi",
    gain: 2,
    price: 20,
    count: 0,
    image: "/images/uzi.png"
  },
  { name: "M16", gain: 4, price: 40, count: 0, image: "/images/m16.png" },
  { name: "M60", gain: 10, price: 120, count: 0, image: "/images/m60.png" }
].map((upgrade, id) => ({ ...upgrade, id }));

export default upgrades;
