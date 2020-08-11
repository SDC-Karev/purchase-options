import React from 'react';
import styles from '../style.css';


const BundleItem = ({ game }) => (
  <a href={styles.bundle_item}>
    <img className={styles.bundle_img} src={game.game_banner} />
  </a>
);

const PurchaseBundle = ({ bundle }) => (
  <div className={styles.game_purchase_wrapper}>
    <div className={styles.game_purchase_block}>
      <h1 className={styles.h1}>
        {bundle.bundle_name} <span className={styles.bundle_tooltip}></span>
      </h1>
      <p className={styles.bundle_info}>Promotion details promotion date</p>
      <div className={styles.bundle_contents}>
        <div className="bundle_contents_items">
          {bundle.games.map((game) => <BundleItem game={game} /> )}
        </div>
      </div>
      <div className={styles.game_purchase}>
        <div className={styles.game_purchase_data}>
          <div className={styles.discount_pct_amount}>{`${bundle.sale_amount}%`}</div>
          <div className={styles.prices}>
            <div className={styles.original_price}>{`\$${(bundle.bundle_price/100).toFixed(2)}`}</div>
            <div className={styles.discounted_price}>{`\$${(bundle.bundle_price/100 * (1 + bundle.sale_amount/100)).toFixed(2)}`}</div>
          </div>
          <div className={styles.green_btn}>
            <a className="btn_purchase" href="#"><span>Add To Cart</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PurchaseBundle;
