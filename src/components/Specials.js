function Specials() {
  const specialsData = [
    { id: 1, title: 'Greek Salad', price: '$12.99', description: 'The famous greek salad of crispy romaine lettuce, peppers, olives and feta cheese.' },
    { id: 2, title: 'Bruchetta', price: '$5.99', description: 'Our Grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' },
    { id: 3, title: 'Lemon Dessert', price: '$5.00', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced.' },
  ];

  return (
    <section className="specials">
      <h2>This weeks specials!</h2>
      <div className="specials-grid">
        {specialsData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title} <span>{item.price}</span></h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;