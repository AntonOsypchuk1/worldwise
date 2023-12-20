import styles from './layout.module.css'
import RequireNotAuth from "@/components/utils/RequireNotAuth";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <RequireNotAuth>
      <div className={styles.layout}>
        {children}
      </div>
    </RequireNotAuth>
  );
}