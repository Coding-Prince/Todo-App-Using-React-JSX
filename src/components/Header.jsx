//Importing components, modules etc
import styles from "./header.module.css";

//Created a Header component for the header of the app
export default function Header() {
  //Returning div with the imported css module as a class name
  return <div className={styles.header}>My Todo List</div>;
}
