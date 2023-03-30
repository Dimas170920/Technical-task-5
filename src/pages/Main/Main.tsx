import React from 'react';
import styles from './Main.module.scss';



const Main = (): JSX.Element => {
return (
    <div className={styles.main}>
      <header>
        <h1> Main Page</h1>
      </header>
      <main>
        <p>Hello</p>
      </main>
      <footer>
        <p>&copy; 2023 Dmytro Boiko</p>
      </footer>
    </div>
  );
}


export default Main;
