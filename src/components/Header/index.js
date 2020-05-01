import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

import reactLogo from '../../assets/images/react.png'
import { Container, Logo, Aside, Profile } from './styles'
import useUser from '../../store/Auth'

export default function Header() {
  const { user, logoff } = useUser()

  return (
    <>
      <Container>
        <Logo src={reactLogo} />
        <Aside>
          <Profile>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={user}
              title={user}
            />
            <div>
              <span>{user}</span>
              <FaPowerOff size={20} title="Loggout" onClick={logoff} />
            </div>
          </Profile>
        </Aside>
      </Container>
    </>
  )
}
