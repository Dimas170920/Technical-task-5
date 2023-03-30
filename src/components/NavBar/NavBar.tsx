import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../navigation';
import styles from './NavBar.module.scss';


const  NavBar = () => {
  return (
    <div>
		<ButtonGroup variant="contained" aria-label="outlined primary button group">
        {navigationItems.mainPage.map((item) => (
							<Link
								className={styles.link}
								key={item.text}
								to={item.to}>
								{<Button>{item.name}</Button>}
							</Link>
						))}
		</ButtonGroup>
    </div>
  );
}

export default NavBar;