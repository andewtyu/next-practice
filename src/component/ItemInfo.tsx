import {Button, Header} from "semantic-ui-react";
import styles from "../../styles/Home.module.css";
import {CSSProperties} from "react";

const ItemInfo = ({item}: {item:any}) => {
  const {
      image_link,
      name,
      price,
      category,
      product_type,
      description
  } = item;

  const pCss:CSSProperties = {
    paddingBottom: "20px",
    fontSize: 18
  }

  return (
      <>
        <div className={styles.wrap}>
          <div className={styles.img_item}>
            <img src={image_link} alt={name} />
          </div>

          <div className={styles.txt_info}>
            <strong className={styles.tit_item}>{name}</strong>
            <strong className={styles.num_price}>${price}</strong>
            <span className={styles.txt_info}>
              {category ? `${category}/` : ""}
              {product_type}
            </span>
            <Button color="orange">
              구매하기
            </Button>
          </div>
        </div>
        <Header as="h3">Description</Header>
        <p style={pCss}>{description}</p>
      </>
  )
}

export default ItemInfo;