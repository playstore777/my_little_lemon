import { Hero, Categories, Card } from "../components/index";

const Home = () => {
  const dishes = [
    {
      id: 0,
      name: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rsemary croutons.",
      price: 12.99,
    },
    {
      id: 1,
      name: "Brushetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlice and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cucumbers,...",
      price: 10.59,
    },
    {
      id: 2,
      name: "Grilled Fish",
      description: `soem fisehd are very grilled that you get the real thrill eating it, YOU should be a Foodie to get it!
            Grilly grilly fishy fishy !!`,
      price: 15.92,
    },
  ];
  return (
    <>
      <Hero />
      <Categories />
      <div className="overflow-y-auto">
        {dishes.length > 0 &&
          dishes.map((dish: any) => (
            <Card
              key={dish.id}
              title={dish.name}
              description={dish.description}
              price={dish.price}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
