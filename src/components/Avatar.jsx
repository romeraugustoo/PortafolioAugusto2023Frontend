import React, { useState, useEffect } from 'react';
import { useMagic } from '../context/MagicContext';

const Avatar = () => {
    const { themeIndex } = useMagic();
    const [isGlassesAnimating, setIsGlassesAnimating] = useState(false);

    useEffect(() => {
        setIsGlassesAnimating(true);
        const timer = setTimeout(() => setIsGlassesAnimating(false), 750);
        return () => clearTimeout(timer);
    }, [themeIndex]);

    return (
        <div className="avatar-wrapper-css">
            <div className="box">
                {/* Orejas separadas (Rigging 2.5D) */}
                <div className="ear-left layer1">
                    <div className="inner-ear-left layer2"></div>
                </div>
                <div className="ear-right layer1">
                    <div className="inner-ear-right layer2"></div>
                </div>

                {/* Cabeza y Rostro Base */}
                <div className="head layer3">
                    <div className="head-copy layer1">
                        <div className="mouth-area layer2">
                            <div className="mouth layer3"></div>
                        </div>
                    </div>
                    {/* Puente de nariz y sombra de menton para volumen 2.5D */}
                    <div className="nose-bridge layer4"></div>
                    <div className="nose layer4"></div>
                    <div className="chin-shadow layer2"></div>
                </div>

                {/* Cabello */}
                <div className="hair layer3">
                    <div className="skin-layer1-hair layer4"></div>
                    <div className="hair-layer2-hair hair-layer2-left layer5"></div>
                    <div className="hair-layer2-hair hair-layer2-right layer5"></div>
                    <div className="hair-layer3-hair layer5"></div>
                </div>
                <div className="hair-flick flick1 layer3"></div>
                <div className="hair-flick flick2 layer4"></div>
                <div className="hair-flick flick3 layer5"></div>

                {/* Rigging Ocular: Cejas independientes (layer6) */}
                <div className="eyebrows-box layer6">
                    <div className="eyebrow eyebrow-left"></div>
                    <div className="eyebrow eyebrow-right"></div>
                </div>

                {/* Rigging Ocular: Esclerotica + Parpados con Parpadeo + Pupila + Brillo (layer6) */}
                <div className="eyes-box layer6">
                    <div className="eye eye-left">
                        <div className="sclera"></div>
                        <div className="pupil-iris">
                            <div className="eye-shine"></div>
                        </div>
                        <div className="eyelid eyelid-top"></div>
                    </div>
                    <div className="eye eye-right">
                        <div className="sclera"></div>
                        <div className="pupil-iris">
                            <div className="eye-shine"></div>
                        </div>
                        <div className="eyelid eyelid-top"></div>
                    </div>
                </div>

                {/* Gafas Tech Animadas (layer7) */}
                <div 
                    key={`glasses-${themeIndex}`} 
                    className={`glasses layer7 ${isGlassesAnimating ? 'glasses-fly-in-anim' : ''}`}
                >
                    <div className="frame-rim-joiner-left frame-rim-joiner layer3"></div>
                    <div className="left-lens-frame lens-frame layer4">
                        <div className="lens">
                            <div className="lens-glare"></div>
                        </div>
                    </div>
                    <div className="lens-bridge layer3"></div>
                    <div className="lens-bridge-cutout layer3"></div>
                    <div className="right-lens-frame lens-frame layer4">
                        <div className="lens">
                            <div className="lens-glare"></div>
                        </div>
                    </div>
                    <div className="frame-rim-joiner-right frame-rim-joiner layer3"></div>
                </div>
                <div className="frame-rim-left frame-rim layer3"></div>
                <div className="frame-rim-right frame-rim layer3"></div>

                {/* Cuello y sombra */}
                <div className="neck-shadow layer2"></div>
                <div className="neck layer1">
                    <div className="neck-v-line layer2"></div>
                </div>

                {/* Ropa con iniciales AR */}
                <div className="shirt-box">
                    <div className="shirt">
                        <div className="collar-left"></div>
                        <div className="collar-right"></div>
                        <div className="logo" title="Augusto Romera"></div>
                        <div className="buttons"></div>
                        <div className="buttons"></div>
                        <div className="buttons-trim"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Avatar;
