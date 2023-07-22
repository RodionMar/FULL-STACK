'use client';

import styles from './page.module.scss';
import Link from 'next/link';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/features/counter/counterSlice';

export default function LoginLayout() {
  const count = useSelector((state: RootState) => {state.counter.value});
  const dispatch = useDispatch();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>This is network for good deeds</h1>
      <nav className={styles.navigation}>
        <Link className={styles.link} href='./login'>Authorization</Link>
        <Link className={styles.link} href='./registration'>Registration</Link>
      </nav>
    </main>
  )
}
