import React, { PropsWithChildren, ReactNode } from "react";

const BgTexture: React.FC<any> = ({children}) => {
    
    console.log(children)
    return (
    <div className='bg-gray-900 antialiased selection:bg-purple-500/90 selection:text-white'>
        <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light" width="100%" height="100%">
            <filter id="pedroduarteisalegend">
                <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
            </filter>
            <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect>
        </svg>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3] will-change-transform">
                {/* transform: translateY(0px); */}
            </div>
        </div>
        {children}  
    </div>
)};

export default BgTexture;