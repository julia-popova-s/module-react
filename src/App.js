import { ProductsList } from "./components/productslist.styled";
import "./components/reset.css";
import "./App.css";

import Card from "./components/card.js";

function App() {
  return (
    <ProductsList>
      <div className="container">
        <header className="header">наша продукция</header>
        <div className="menu">
          <Card
            url={"images/1.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            wight={500}
            unit={"г."}
          />
          <Card
            url={"images/2.png"}
            title={"Свиные ребрышки на гриле с зеленью"}
            description={"Не следует, однако забывать, что реализация намеченных плановых"}
            price={1600}
            wight={750}
            unit={"г."}
          />
          <Card
            url={"images/3.png"}
            title={"Креветки по-королевски в лимонном соке"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            }
            price={1820}
            count={7}
            unit={"шт."}
          />
          <Card
            url={"images/4.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            wight={500}
            unit={"г."}
          />
          <Card
            url={"images/5.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            wight={500}
            unit={"г."}
          />
          <Card
            url={"images/6.png"}
            title={"Свиные ребрышки на гриле с зеленью"}
            description={"Не следует, однако забывать, что реализация намеченных плановых"}
            price={1600}
            wight={750}
            unit={"г."}
          />
          <Card
            url={"images/7.png"}
            title={"Креветки по-королевски в лимонном соке"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            }
            price={1820}
            count={7}
            unit={"шт."}
          />
          <Card
            url={"images/8.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            wight={500}
            unit={"г."}
          />
        </div>
      </div>
    </ProductsList>
  );
}

export default App;
