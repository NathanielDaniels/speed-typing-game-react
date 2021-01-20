import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact () {
  return (
    <>
      <div className='contact-section'>
        <h1>Get in touch</h1>
        <aside>
          <ul className='social-media'>
            <li>
              <a
                target='_blank'
                title='Twitter'
                rel='noreferrer noopener'
                href='https://twitter.com/NathanDDaniels'
              >
                <div className='social-icon-container'>
                  <p>Twitter</p>
                  <FontAwesomeIcon className='social-icon' icon={faTwitter} />
                </div>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                title='linkedIn'
                rel='noreferrer noopener'
                href='https://www.linkedin.com/in/nathaniel-daniels-500740139/'
              >
                <div className='social-icon-container'>
                  <p>LinkedIn</p>
                  <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
                </div>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                title='GitHub'
                rel='noreferrer noopener'
                href='https://github.com/NathanielDaniels'
              >
                <div className='social-icon-container'>
                  <p>Github</p>
                  <FontAwesomeIcon className='social-icon' icon={faGithub} />
                </div>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  )
}

export default Contact
