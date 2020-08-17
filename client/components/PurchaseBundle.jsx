import React from 'react';
import { PurchaseButtonBlock } from './PurchaseButtons.jsx';
import { BasicTooltip, GameTooltip } from './Tooltips.jsx';
import styles from '../style.css';

const PurchaseBundle = ({ bundle }) => (
  <div className={styles.game_purchase_wrapper}>
    <div className={styles.game_purchase_block}>
      <BasicTooltip bundle={bundle} />
      <p className={styles.bundle_info}>Promotion details promotion date</p>
      <div className={styles.bundle_contents}>
        <div className={styles.bundle_items_block}>
          <div className="bundle_contents_items">
            {bundle.games.map((game) => <GameTooltip key={game.game_id} game={game} />)}
          </div>
        </div>
      </div>
      <PurchaseButtonBlock price={bundle.bundle_price} sale_amount={bundle.sale_amount} />
    </div>
  </div>
);

export default PurchaseBundle;