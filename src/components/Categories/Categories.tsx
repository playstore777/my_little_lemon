type catType = { id: number; name: string };

const Categories = () => {
  const catalogue: catType[] = [
    {
      id: 0,
      name: "Lunch",
    },
    {
      id: 1,
      name: "Mains",
    },
    {
      id: 2,
      name: "Desserts",
    },
    {
      id: 3,
      name: "A La some french dish...!",
    },
  ];
  return (
    <div className="p-4 px-0">
      <header className="text-xl font-bold px-4">ORDER FOR DELIVERY!</header>
      <main>
        <div className="px-1 overflow-y-auto flex gap-4 flex-nowrap items-center">
          {catalogue.length > 0 &&
            catalogue.map((cat: catType) => (
              <div
                className="bg-gray-300 my-4 px-3 py-1 rounded-3xl whitespace-nowrap"
                key={cat.id}
              >
                {cat.name}
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;
