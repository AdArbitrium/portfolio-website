import styles from "./knockoutText.module.css";

function Knockout() {
  return (
    <div>
      <div className={`${styles.backdrop} ${styles.taito}`}>
        <p className={`${styles.text} ${styles.taito}`}>KNOCKOUT</p>
      </div>
    </div>
  );
}

export default Knockout;
