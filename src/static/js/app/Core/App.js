import S from '@ariiiman/s'
import Support from './Support.js'
import Route from './Route.js'

class App {

    constructor () {
        Support.init()

        S.TopWhenRefresh()

        new Route()
    }

}

export default App
