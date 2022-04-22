import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Users from './api/hello'

export default function Home() {
  return (
    <div>
        <Users/>
    </div>
  )
}
