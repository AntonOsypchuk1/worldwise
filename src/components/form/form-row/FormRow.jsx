import styles from './FormRow.module.css'

const FormRow = ({ label, error, children }) => {

  const id = Array.isArray(children) ? children[0].props.id : children.props.id

  return (
    <div className={styles.row}>
      <div className={styles.message}>
        {label && <label htmlFor={id}>{label}</label>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
      {children}
    </div>
  );
};

export default FormRow;