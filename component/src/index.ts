import type { App, Plugin } from 'vue'

import { Panel } from './Panel'
import { Splitter } from './Splitter'

Splitter.Panel = Panel

Splitter.install = (app: App) => {
  app.component(Panel.name!, Panel)

  return app
}

export default Splitter as typeof Splitter &
  Plugin & {
    readonly Panel: typeof Panel
  }
