import ButtonToBack from "../../ui/buttonToBack";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BasketMini from "../../elements/basketMini";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";

function ProductPage() {
  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const params = useParams();
  console.log(params.id);
  return (
    <div className="product">
      <header className="header">
        <div className="container">
          <div className="header-block">
            <ButtonToBack handleGoBack={goBack} />
            <BasketMini counter={quantity} sum={amount} />
          </div>
        </div>
      </header>
      <section className="product">
        <div className="container">
          <div className="product-item">
            <div className="product-item__view">
              <img
                className="product-item__img"
                src="/images/product/2.png"
                alt="Фотография блюда"
              />
            </div>
            <div className="product-item__text">
              <div className="product-item__title">{params.name}</div>
              <div className="product-item__description">
                Не следует, однако забывать, что консультация с широким активом
                представляет собой интересный эксперимент проверки новых
                предложений. Не следует, однако забывать, что сложившаяся
                структура организации позволяет оценить значение новых
                предложений. Разнообразный и богатый опыт начало повседневной
                работы по формированию позиции требуют от нас анализа позиций.Не
                следует, однако забывать, что консультация с широким активом
                представляет собой интересный эксперимент проверки новых
                предложений. Не следует, однако забывать, что сложившаяся
                структура организации позволяет оценить значение новых
                предложений.
              </div>
              <div className="product-item__block-price">
                <span className="product-item__price">
                  {`${0} ₽`} {"/"}
                </span>
                <span className="product-item__weight">{`${5} г.`}</span>
                <ButtonForOrder name={"В корзину"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProductPage;
