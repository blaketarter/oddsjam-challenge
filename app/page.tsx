import styles from "./page.module.css";
import { ArbitrageOpportunities } from "./components/ArbitrageOpportunities";

export default function Home() {
  return (
    <main className={styles.main}>
      <ArbitrageOpportunities />
    </main>
  );
}
