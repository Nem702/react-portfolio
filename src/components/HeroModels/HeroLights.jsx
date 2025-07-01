import React from 'react'
import * as useThree from 'three'

const HeroLights = () => {
  return (
    <>
        <spotLight  
        // positioning the light
            position={[1, 4, 2]}
            angle={0.15}
            intensity={100}
            // softness of the light around the edges
            penumbra={0.2}
            color="white"
        />

        <spotLight  
            position={[4, 5, 4]}
            angle={0.30}
            intensity={50}
            penumbra={0.5}
            color="#4cc9f0"
        />

        <spotLight  
            position={[-3, 5, 5]}
            angle={0.40}
            intensity={70}
            penumbra={1}
            color="#9d4edd"
        />

        <primitive 
            object={new useThree.RectAreaLight('#A259FF', 8, 3, 2)}
            position={[1, 3, 4]}
            intensity={15}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />

        <pointLight 
            position={[0, 1, 0]}
            intensity={10}
            color="#7209b7"
        />

        <pointLight 
            position={[1, 2, -2]}
            intensity={10}
            color="#0d00a4"
        />
    </>
  )
}

export default HeroLights