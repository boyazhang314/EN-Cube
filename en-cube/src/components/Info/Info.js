import React from "react"
import { useNavigate } from "react-router-dom";

import "./Info.css"

import cube from "../../images/moves/cube.svg"
import L from "../../images/moves/L.svg"
import Lprime from "../../images/moves/L'.svg"
import M from "../../images/moves/M.svg"
import Mprime from "../../images/moves/M'.svg"
import R from "../../images/moves/R.svg"
import Rprime from "../../images/moves/R'.svg"
import U from "../../images/moves/U.svg"
import Uprime from "../../images/moves/U'.svg"
import E from "../../images/moves/E.svg"
import Eprime from "../../images/moves/E'.svg"
import D from "../../images/moves/D.svg"
import Dprime from "../../images/moves/D'.svg"
import F from "../../images/moves/F.svg"
import Fprime from "../../images/moves/F'.svg"
import S from "../../images/moves/S.svg"
import Sprime from "../../images/moves/S'.svg"
import B from "../../images/moves/B.svg"
import Bprime from "../../images/moves/B'.svg"

import Button from "../Utilities/Button/Button"

const Info = () => {
    const navigate = useNavigate()
    return (
        <div class="info-container">
            <div class="info-title">
                <img src={cube} id="cube" alt="3x3 cube" />
                <div class="info-subtitle">Moves are made with white face in front, orange on top, and blue on right</div>
            </div>
            <hr class="rounded" />
            <div class="info-section">
                <div class="section-title">X-Axis</div>
                <div class="info-moves">
                    <div class="moves">
                        <div class="pair">
                            <div class="info-image">
                                <img src={L} id="mo" alt="l-move" />
                                <div class="img-comment">L</div>
                            </div>
                            <div class="info-image">
                                <img src={Lprime} id="mo" alt="l'-move" />
                                <div class="img-comment">L'</div>
                            </div>
                        </div>
                        <div class="pair">
                            <div class="info-image">
                                <img src={M} id="mo" alt="m-move" />
                                <div class="img-comment">M</div>
                            </div>
                            <div class="info-image">
                                <img src={Mprime} id="mo" alt="m'-move" />
                                <div class="img-comment">M'</div>
                            </div>
                        </div>
                    </div>
                    <div class="pair">
                        <div class="info-image">
                            <img src={R} id="mo" alt="r-move" />
                            <div class="img-comment">R</div>
                        </div>
                        <div class="info-image">
                            <img src={Rprime} id="mo" alt="r'-move" />
                            <div class="img-comment">R'</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="rounded" />
            <div class="info-section">
                <div class="section-title">Y-Axis</div>
                <div class="info-moves">
                    <div class="moves">
                        <div class="pair">
                            <div class="info-image">
                                <img src={U} id="mo" alt="u-move" />
                                <div class="img-comment">U</div>
                            </div>
                            <div class="info-image">
                                <img src={Uprime} id="mo" alt="u'-move" />
                                <div class="img-comment">U'</div>
                            </div>
                        </div>
                        <div class="pair">
                            <div class="info-image">
                                <img src={E} id="mo" alt="e-move" />
                                <div class="img-comment">E</div>
                            </div>
                            <div class="info-image">
                                <img src={Eprime} id="mo" alt="e'-move" />
                                <div class="img-comment">E'</div>
                            </div>
                        </div>
                    </div>
                    <div class="pair">
                        <div class="info-image">
                            <img src={D} id="mo" alt="d-move" />
                            <div class="img-comment">D</div>
                        </div>
                        <div class="info-image">
                            <img src={Dprime} id="mo" alt="d'-move" />
                            <div class="img-comment">D'</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="rounded" />
            <div class="info-section">
                <div class="section-title">Z-Axis</div>
                <div class="info-moves">
                    <div class="moves">
                        <div class="pair">
                            <div class="info-image">
                                <img src={F} id="mo" alt="f-move" />
                                <div class="img-comment">F</div>
                            </div>
                            <div class="info-image">
                                <img src={Fprime} id="mo" alt="f'-move" />
                                <div class="img-comment">F'</div>
                            </div>
                        </div>
                        <div class="pair">
                            <div class="info-image">
                                <img src={S} id="mo" alt="s-move" />
                                <div class="img-comment">S</div>
                            </div>
                            <div class="info-image">
                                <img src={Sprime} id="mo" alt="s'-move" />
                                <div class="img-comment">S'</div>
                            </div>
                        </div>
                    </div>
                    <div class="pair">
                        <div class="info-image">
                            <img src={B} id="mo" alt="b-move" />
                            <div class="img-comment">B</div>
                        </div>
                        <div class="info-image">
                            <img src={Bprime} id="mo" alt="b'-move" />
                            <div class="img-comment">B'</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="rounded" />
            <div class="return-home">
                <Button
                    value="Home"
                    onClick={() => {
                        navigate("/")
                        window.location.reload()
                    }}
                    fontsize="3vh"
                    />
            </div>
        </div>
    )
}

export default Info