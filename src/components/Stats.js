export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Počnite da dodajete stavke na spisak za pakovanje 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  const lastTwoDigits = numItems % 100;
  const itemLabel =
    numItems % 10 === 1 && lastTwoDigits !== 11
      ? "stavku"
      : numItems % 10 >= 2 &&
          numItems % 10 <= 4 &&
          (lastTwoDigits < 12 || lastTwoDigits > 14)
        ? "stavke"
        : "stavki";

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Sve je spakovano! Spremni ste za polazak ✈️"
          : ` 💼 Na spisku imate ${numItems} ${itemLabel}, a spakovali ste ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
