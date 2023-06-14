import React, { useState } from 'react'
import styles from './RegisterModal.module.scss';

const RegisterModal = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRepassword] = useState('');

  const toEntryModal = () => {
    props.setRegisterModalState(false);
    props.setEntryModalState(true);
  }

  const registerUser = () => {
    if(login == '' || password == '') {
      alert('Логин или пароль не могут быть пустыми');
      return;
    } else if(password != rePassword) {
      alert('Пароли не совпадают');
      return;
    }

    const userData = {
      login: login,
      password: password,
    }

    fetch('http://0.0.0.0:5000/register', {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      if(data.is_registered == true) {
        props.setRegisterModalState(false);
      } else {
        alert("При регистрации произошли технические ошибки");
      }
    })

  }
  
  return (
    <div className={props.registerModalState ? styles.active : styles.registerModal}>
      <div className={styles.registerModalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.registerTitleBlock}>
          <h4 className={styles.registerTitle}>Регистрация</h4>
          <p className={styles.registerModalClose} onClick={() => props.setRegisterModalState(false)}>&times;</p>
        </div>
        <div className={styles.registerLoginBlock}>
          <label className={styles.registerLabel}>Логин</label>
          <input className={styles.registerInput} value={login} onChange={e => setLogin(e.target.value)} type="email" />
        </div>

        <div className={styles.registerLoginBlock}>
          <label className={styles.registerLabel}>Пароль</label>
          <input className={styles.registerInput} value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </div>

        <div className={styles.registerLoginBlock}>
          <label className={styles.registerLabel}>Повторите пароль</label>
          <input className={styles.registerInput} value={rePassword} onChange={e => setRepassword(e.target.value)} type="password" />
        </div>

        <div className={styles.registerContinueBlock}>
          <div className={styles.registerContinueInput} onClick={registerUser}>Зарегистрироваться</div>
        </div>

        <div className={styles.registerRedirectBlock}>
          <label className={styles.registerBackLabel}><span className={styles.registerQue} onClick={toEntryModal}>Уже зарегистрированы?</span></label>
        </div>
      </div>
    </div>   
  )
}

export default React.memo(RegisterModal);
