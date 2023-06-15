import Link from 'next/link'

import { FOOTER_LINKS } from '@/constants'

const FooterLinks = () => {
  return (
    <>
      {FOOTER_LINKS.map((link) => (
          <div
            className="footer__link"
            key={link.title}
          >
            <h3 className="font-bold">{link.title}</h3>
            {link.links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className='text-gray-500 hover:text-gray-900'
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
    </>
  )
}

export default FooterLinks