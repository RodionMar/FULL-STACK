import styles from './registration.module.scss';
import Form from '@/components/Form/Form';
import Input from '@/components/UI/input/Input';
import Title from '@/components/UI/Headings/Title/Title';
import Link from 'next/link';

export default function LoginLayout() {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Registration</h1>
      <Input type='email' placeholder='Enter your email'/>
      <Input type='password' placeholder='Enter your password'/>
      <Input type='password' placeholder='Enter your password one more time'/>
      <button className={styles.button} type='submit'>Sign Up</button>
      <Link className={styles.link}  href='./login'>I have an account</Link>
    </form>
  )
}