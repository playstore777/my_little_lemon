const Card = (props: any) => {
  return (
    <div className="px-4 py-2">
      <header className="text-2xl font-semibold">{props.title}</header>
      <main className="whitespace-pre-line">{props.description}</main>
      <footer className="text-xl mt-2">$ {props.price}</footer>
    </div>
  );
};

export default Card;
