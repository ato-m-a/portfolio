import type { Bullet as B } from '@/types/common/fixtures';
import type { ReactElement } from 'react';

const Bullet = (bullet: B): ReactElement => {
  const { outer, inner } = bullet;

  return (
    <>
      <li className={`mb-2 list-disc`}>
        {outer}
      </li>
      {
        inner ?
        <li className="mb-2">
          <ul className="pl-5 list-indent">
            {
              inner.map((text, index) => (
                <li key={`nested-content-${index}`} className="my-2">{text}</li>
              ))
            }
          </ul>
        </li> : null
      }
    </>
  )
}

export default Bullet;