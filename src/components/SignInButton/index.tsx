import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton (){
    const { data: session } = useSession()
    
    return session   
    ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            {session.user.image
                ? <img src={session.user.image} alt="User profile picture" />
                : <FaGithub color='var(--green-500)' />
            }

            {session.user.name}
            <FiX color='var(--gray-400)' className={styles.closeIcon} />
        </button>
    )   
    : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color='var(--yellow-500)' />
            Sign in with Github
        </button>
    )
}