const upgrades = [
  { name: "Beretta 9mm", gain: 1, price: 1 },
  { name: "Ingram uzi", gain: 2, price: 10 },
  { name: "M16", gain: 4, price: 20 }
].map((upgrade, id) => ({ ...upgrade, id }));

export default upgrades;
