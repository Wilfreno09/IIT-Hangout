import styles from "@/styles/Login.module.css"
import { TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <div className={styles.login__box}>
      <h2>Login</h2>
      <form autoComplete="off" className={styles.login__form}>
        <TextField id="email" label="User email" type="email" className={styles.auth__input}/>
        <TextField id="password" label="Password" type="password" className={styles.auth__input}/>
        <Button variant="contained">Log In </Button >
      </form>

    </div>
  );
}

// <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />