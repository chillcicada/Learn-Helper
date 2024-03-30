import { createRoot } from 'react-dom/client'
import classNames from 'classnames'
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material'

import { theme } from '@/theme'
import '@/i18n'

import styles from '@/css/doc.module.css'

createRoot(document.getElementById('main')!).render(
  <CssVarsProvider defaultMode="system" theme={theme}>
    <CssBaseline />
    <main className={classNames(styles.wrapper, styles.doc_wrapper)} style={{ height: '100vh' }}>
      <div className={styles.doc}>
        <div className={styles.doc_text_block}>
          test
        </div>
      </div>
    </main>
  </CssVarsProvider>,
)
