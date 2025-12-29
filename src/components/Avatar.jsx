import React from 'react';

const Avatar = () => {
    return (
        <div className="avatar-wrapper-css">
            <div className="box">
                <div className="ear-left layer1">
                    <div className="inner-ear-left layer2"></div>
                </div>

                <div className="ear-right layer1">
                    <div className="inner-ear-right layer2"></div>
                </div>

                <div className="head layer3">
                    <div className="head-copy layer1">
                        <div className="mouth-area layer2">
                            <div className="mouth layer3"></div>
                        </div>
                    </div>
                    <div className="nose layer4"></div>
                </div>

                <div className="hair layer3">
                    <div className="skin-layer1-hair layer4"></div>
                    <div className="hair-layer2-hair hair-layer2-left layer5"></div>
                    <div className="hair-layer2-hair hair-layer2-right layer5"></div>
                    <div className="hair-layer3-hair layer5"></div>
                </div>
                <div className="hair-flick flick1 layer3"></div>
                <div className="hair-flick flick2 layer4"></div>
                <div className="hair-flick flick3 layer5"></div>

                <div className="glasses">
                    <div className="frame-rim-joiner-left frame-rim-joiner layer3"></div>

                    <div className="left-lens-frame lens-frame layer4">
                        <div className="lens"></div>
                    </div>
                    <div className="lens-bridge layer3"></div>
                    <div className="lens-bridge-cutout layer3"></div>
                    <div className="right-lens-frame lens-frame layer4">
                        <div className="lens"></div>
                    </div>
                    <div className="frame-rim-joiner-right frame-rim-joiner layer3"></div>
                </div>
                <div className="frame-rim-left frame-rim layer3"></div>
                <div className="frame-rim-right frame-rim layer3"></div>

                <div className="neck-shadow layer2"></div>
                <div className="neck layer1">
                    <div className="neck-v-line layer2"></div>
                </div>

                <div className="shirt-box">
                    <div className="shirt">
                        <div className="collar-left"></div>
                        <div className="collar-right"></div>
                        <div className="logo"></div>
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
