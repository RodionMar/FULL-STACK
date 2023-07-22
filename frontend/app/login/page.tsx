import styles from './login.module.scss';
import Form from '@/components/Form/Form';
import Input from '@/components/UI/input/Input';
import Title from '@/components/UI/Headings/Title/Title';
import Link from 'next/link';

export default function LoginLayout() {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Authorization</h1>
      <Input type='email' placeholder='Enter your email'/>
      <Input type='password' placeholder='Enter your password'/>
      <button className={styles.button} type='submit' >Log in</button>
      <Link className={styles.link}  href='/registration'>I don't have an account</Link>
    </form>
  )
}
