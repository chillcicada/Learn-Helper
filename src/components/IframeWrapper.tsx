import { Fragment } from 'react'
import Iframe from 'react-iframe'

interface IframeWrapperProps {
  id?: string
  className?: string
  url: string
}

function IframeWrapper({ id, className, url }: IframeWrapperProps) {
  return (
    <Fragment key={url}>
      <Iframe
        id={id}
        className={className}
        url={url}
        sandbox={[
          'allow-forms',
          'allow-modals',
          'allow-popups',
          'allow-scripts',
          'allow-same-origin',
          'allow-downloads' as any,
        ]}
      >
      </Iframe>
    </Fragment>
  )
}

export default IframeWrapper
