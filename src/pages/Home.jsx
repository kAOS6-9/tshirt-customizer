import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import state from '../store'
import { CustomButton } from "../components"

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro &&(
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="./threejs.png" alt="logo" className="w-14 h-14 object-fit" />
          </motion.header>

          <motion.div className="home-content " {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                READY. <br className="xl:block hidden" />SET. <br className="xl:block hidden" />CREATE.
              </h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-lg font-normal text-left text-gray-800 text-lg">
                Create your unique and exclusive shirt with our brand new 3d customization tool.
                <strong> Unleash your imagination</strong>{' '}and define your own style.
              </p>
              <CustomButton type="filled" title="Customize It!" handleClick={() => state.intro = false}  customStyles='w-fit px-4 py-2.5 font-bold text-sm' />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home