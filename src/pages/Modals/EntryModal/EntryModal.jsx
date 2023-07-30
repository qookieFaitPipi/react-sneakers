import React, { useState } from 'react'
import styles from './EntryModal.module.scss';

//Context
import {useContext} from 'react';
import {Context} from './../../../Context/index.js';

const EntryModal = (props) => {
  const {cookies, setCookies} = useContext(Context);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const toRegisterModal = () => {
    props.setEntryModalState(false);
    props.setRegisterModalState(true);
  }

  const entryUser = () => {
    const userData = {
      login: login,
      password: password,
    }

    fetch('http://0.0.0.0:5000/entry', {
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
      if(data.is_entered == true) {
        props.setEntryModalState(false);
        setCookies('userLogin', data.userLogin, {path: '/'});
        console.log(data)
      } else {
        alert('При авторизации произошли технические ошибки');
      }
    })
  }
  
  return (
    <div className={props.entryModalState ? styles.active : styles.entryModal}>
      <div className={styles.entryModalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.entryTitleBlock}>
          <div className={styles.entryTitle}>Вход</div>
          <div className={styles.entryModalClose} onClick={() => props.setEntryModalState(false)}>&times;</div>
        </div>
        <div className={styles.entryLoginBlock}>
          <label className={styles.entryLabel}>Логин</label>
          <input className={styles.entryInput} value={login} onChange={e => setLogin(e.target.value)} type="email" />
        </div>

        <div className={styles.entryLoginBlock}>
          <label className={styles.entryLabel}>Пароль</label>
          <input className={styles.entryInput} value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </div>

        <div className={styles.entryContinueBlock}>
          <div className={styles.entryContinueInput} onClick={entryUser}>Войти</div>
        </div>

        <div className={styles.entryRedirectBlock}>
          <label className={styles.entryBackLabel} onClick={toRegisterModal}>Нужна учётная запись?<span className={styles.entryQue}>Зарегистрироваться</span></label>
        </div>
      </div>
    </div>   
  )
}

export default EntryModal
