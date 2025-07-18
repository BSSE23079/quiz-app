import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>QuizApp</div>
      <ul className={classes.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/quizzes">Quizzes</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;