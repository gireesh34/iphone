import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" className="w-36 h-36 md:w-44 md:h-44" />
        </div>

        <div className="flex flex-col items-center text-center px-4 md:px-0">
          <h2 className="hiw-title text-2xl md:text-4xl">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle text-base md:text-lg mt-2 md:mt-4">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10 w-full"
              />
            </div>
            <div className="hiw-video w-full">
                <video className="pointer-events-none w-full" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3 text-sm md:text-base">Honkai: Star Rail</p>
          </div>

          <div className="hiw-text-container flex flex-col md:flex-row">
                <div className="flex flex-1 justify-center flex-col px-4 md:px-0">
                  <p className="hiw-text g_fadeIn text-sm md:text-base">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn text-sm md:text-base mt-2 md:mt-4">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn px-4 md:px-0 mt-4 md:mt-0">
                <p className="hiw-text text-sm md:text-base">New</p>
                <p className="hiw-bigtext text-2xl md:text-4xl">Pro-class GPU</p>
                <p className="hiw-text text-sm md:text-base">with 6 cores</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks