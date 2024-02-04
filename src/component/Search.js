import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Search = () => {
    return (
        <>
        <div className='mt-200 text-center '>
        <h2>
          Fast Diamond Search
        </h2>
        {/* <h3>
          Search Over <span>1,000,000</span> Diamonds from Thousands of Verified Suppliers Worldwide!
        </h3> */}
      </div>
{/* <div class="container-search" id="free-search-container" data-show-items="20" data-page-number="1">
    <div class="filter-box">
                <div class="form-group shape-group">
                    <div class="name-filter">Shape <span class="red">*</span></div>
                    <div class="row-filter">
                        <div class="filter-container">
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f0" class="custom-control-input" value="Round">
                                    <label for="f0" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2394/rap_round.svg" alt="Round" class="img-responsive"></img></span>
                                        <span class="text-label">Round</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f1" class="custom-control-input" value="Pear">
                                    <label for="f1" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2389/rap_pear.svg" alt="Pear" class="img-responsive"></span>
                                        <span class="text-label">Pear</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f2" class="custom-control-input" value="Princess">
                                    <label for="f2" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2391/rap_princess.svg" alt="Princess" class="img-responsive"></span>
                                        <span class="text-label">Princess</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f3" class="custom-control-input" value="Marquise">
                                    <label for="f3" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2385/rap_marquise.svg" alt="Marquise" class="img-responsive"></span>
                                        <span class="text-label">Marquise</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f4" class="custom-control-input" value="Emerald">
                                    <label for="f4" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2414/rap_emerald_l.svg" alt="Emerald" class="img-responsive"></span>
                                        <span class="text-label">Emerald</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f5" class="custom-control-input" value="Cushion Brilliant">
                                    <label for="f5" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2412/rap_cushion_brilliant_l.svg" alt="Cushion Brilliant" class="img-responsive"></span>
                                        <span class="text-label">Cushion Brilliant</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f6" class="custom-control-input" value="Cushion Modified">
                                    <label for="f6" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2413/rap_cushion_mod_l.svg" alt="Cushion Modified" class="img-responsive"></span>
                                        <span class="text-label">Cushion Modified</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f7" class="custom-control-input" value="Asscher">
                                    <label for="f7" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2407/rap_asscher_l.svg" alt="Asscher" class="img-responsive"></span>
                                        <span class="text-label">Asscher</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f8" class="custom-control-input" value="Sq. Emerald">
                                    <label for="f8" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2396/rap_sq_emerald.svg" alt="Sq. Emerald" class="img-responsive"></span>
                                        <span class="text-label">Sq. Emerald</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f9" class="custom-control-input" value="Oval">
                                    <label for="f9" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2388/rap_oval.svg" alt="Oval" class="img-responsive"></span>
                                        <span class="text-label">Oval</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f10" class="custom-control-input" value="Radiant">
                                    <label for="f10" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2392/rap_radiant.svg" alt="Radiant" class="img-responsive"></span>
                                        <span class="text-label">Radiant</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f11" class="custom-control-input" value="Heart">
                                    <label for="f11" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2381/rap_heart.svg" alt="Heart" class="img-responsive"></span>
                                        <span class="text-label">Heart</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f12" class="custom-control-input" value="European Cut">
                                    <label for="f12" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2378/rap_euro_cut.svg" alt="European Cut" class="img-responsive"></span>
                                        <span class="text-label">European Cut</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f13" class="custom-control-input" value="Old Miner">
                                    <label for="f13" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2387/rap_old_miner.svg" alt="Old Miner" class="img-responsive"></span>
                                        <span class="text-label">Old Miner</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f14" class="custom-control-input" value="Baguette">
                                    <label for="f14" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2408/rap_baguette_l.svg" alt="Baguette" class="img-responsive"></span>
                                        <span class="text-label">Baguette</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f15" class="custom-control-input" value="Briolette">
                                    <label for="f15" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2409/rap_briolette_l.svg" alt="Briolette" class="img-responsive"></span>
                                        <span class="text-label">Briolette</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f16" class="custom-control-input" value="Bullets">
                                    <label for="f16" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2410/rap_bullet_l.svg" alt="Bullets" class="img-responsive"></span>
                                        <span class="text-label">Bullets</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f17" class="custom-control-input" value="Calf">
                                    <label for="f17" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2411/rap_calf_l.svg" alt="Calf" class="img-responsive"></span>
                                        <span class="text-label">Calf</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f18" class="custom-control-input" value="Half Moon">
                                    <label for="f18" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2380/rap_half_moon.svg" alt="Half Moon" class="img-responsive"></span>
                                        <span class="text-label">Half Moon</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f19" class="custom-control-input" value="Hexagonal">
                                    <label for="f19" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2382/rap_hexagonal.svg" alt="Hexagonal" class="img-responsive"></span>
                                        <span class="text-label">Hexagonal</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f20" class="custom-control-input" value="Kite">
                                    <label for="f20" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2383/rap_kite.svg" alt="Kite" class="img-responsive"></span>
                                        <span class="text-label">Kite</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f21" class="custom-control-input" value="Lozenge">
                                    <label for="f21" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2384/rap_lozenge.svg" alt="Lozenge" class="img-responsive"></span>
                                        <span class="text-label">Lozenge</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f22" class="custom-control-input" value="Octagonal">
                                    <label for="f22" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2386/rap_octagonal.svg" alt="Octagonal" class="img-responsive"></span>
                                        <span class="text-label">Octagonal</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f23" class="custom-control-input" value="Pentagonal">
                                    <label for="f23" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2390/rap_pentagonal.svg" alt="Pentagonal" class="img-responsive"></span>
                                        <span class="text-label">Pentagonal</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f24" class="custom-control-input" value="Rose">
                                    <label for="f24" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2393/rap_rose.svg" alt="Rose" class="img-responsive"></span>
                                        <span class="text-label">Rose</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f25" class="custom-control-input" value="Shield">
                                    <label for="f25" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2395/rap_shield.svg" alt="Shield" class="img-responsive"></span>
                                        <span class="text-label">Shield</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f26" class="custom-control-input" value="Square">
                                    <label for="f26" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2398/rap_square.svg" alt="Square" class="img-responsive"></span>
                                        <span class="text-label">Square</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f27" class="custom-control-input" value="Square Radiant">
                                    <label for="f27" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2397/rap_sq_radiant.svg" alt="Square Radiant" class="img-responsive"></span>
                                        <span class="text-label">Square Radiant</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f28" class="custom-control-input" value="Star">
                                    <label for="f28" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2399/rap_star.svg" alt="Star" class="img-responsive"></span>
                                        <span class="text-label">Star</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f29" class="custom-control-input" value="Tapered Baguette">
                                    <label for="f29" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2401/rap_tapered_baguette.svg" alt="Tapered Baguette" class="img-responsive"></span>
                                        <span class="text-label">Tapered Baguette</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f30" class="custom-control-input" value="Tapered Bullet">
                                    <label for="f30" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2400/rap_tapered.svg" alt="Tapered Bullet" class="img-responsive"></span>
                                        <span class="text-label">Tapered Bullet</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f31" class="custom-control-input" value="Trapezoid">
                                    <label for="f31" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2402/rap_trapezoid.svg" alt="Trapezoid" class="img-responsive"></span>
                                        <span class="text-label">Trapezoid</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f32" class="custom-control-input" value="Triangular">
                                    <label for="f32" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2403/rap_triangular.svg" alt="Triangular" class="img-responsive"></span>
                                        <span class="text-label">Triangular</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f33" class="custom-control-input" value="Trilliant">
                                    <label for="f33" class="custom-control-label with-img">
                                            <span class="img-wrap"><img src="/media/2404/rap_trilliant.svg" alt="Trilliant" class="img-responsive"></span>
                                        <span class="text-label">Trilliant</span>
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="f34" class="custom-control-input" value="Other">
                                    <label for="f34" class="custom-control-label with-img">
                                        <span class="text-label">Other</span>
                                    </label>
                                </div>
                        </div>
                        <button type="button" class="btn show-more-filters">
                            <span class="text">+ 30 More</span>
                            <span class="text opened">- 30 Less</span>
                            <span class="arrow-btn">
                                <img src="/images/icon-v-down-blue.svg" alt="" class="img-responsive">
                            </span>
                        </button>
                    </div>
                </div>
            <div class="form-group size-group">
                <div class="name-filter">Size</div>
                <div class="row-filter">
                    <div class="form-inline">
                        <label for="sizeFrom">From</label>
                        <input type="number" class="form-control" id="sizeFrom" placeholder="Any">
                    </div>

                    <div class="form-inline">
                        <label for="sizeTo">To</label>
                        <input type="number" class="form-control" id="sizeTo" placeholder="Any">
                    </div>
                </div>
            </div>
                <div class="form-group color-group">
                    <div class="name-filter">Color <span class="red">*</span></div>
                    <div class="row-filter">
                        <div class="filter-container">
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c0" class="custom-control-input">
                                    <label for="c0" class="custom-control-label">
                                        D
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c1" class="custom-control-input">
                                    <label for="c1" class="custom-control-label">
                                        E
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c2" class="custom-control-input">
                                    <label for="c2" class="custom-control-label">
                                        F
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c3" class="custom-control-input">
                                    <label for="c3" class="custom-control-label">
                                        G
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c4" class="custom-control-input">
                                    <label for="c4" class="custom-control-label">
                                        H
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c5" class="custom-control-input">
                                    <label for="c5" class="custom-control-label">
                                        I
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c6" class="custom-control-input">
                                    <label for="c6" class="custom-control-label">
                                        J
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c7" class="custom-control-input">
                                    <label for="c7" class="custom-control-label">
                                        K
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c8" class="custom-control-input">
                                    <label for="c8" class="custom-control-label">
                                        L
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c9" class="custom-control-input">
                                    <label for="c9" class="custom-control-label">
                                        M
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c10" class="custom-control-input">
                                    <label for="c10" class="custom-control-label">
                                        N
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c11" class="custom-control-input">
                                    <label for="c11" class="custom-control-label">
                                        O
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c12" class="custom-control-input">
                                    <label for="c12" class="custom-control-label">
                                        P
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c13" class="custom-control-input">
                                    <label for="c13" class="custom-control-label">
                                        Q
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c14" class="custom-control-input">
                                    <label for="c14" class="custom-control-label">
                                        R
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c15" class="custom-control-input">
                                    <label for="c15" class="custom-control-label">
                                        S
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c16" class="custom-control-input">
                                    <label for="c16" class="custom-control-label">
                                        T
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c17" class="custom-control-input">
                                    <label for="c17" class="custom-control-label">
                                        U
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c18" class="custom-control-input">
                                    <label for="c18" class="custom-control-label">
                                        V
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c19" class="custom-control-input">
                                    <label for="c19" class="custom-control-label">
                                        W
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c20" class="custom-control-input">
                                    <label for="c20" class="custom-control-label">
                                        X
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c21" class="custom-control-input">
                                    <label for="c21" class="custom-control-label">
                                        Y
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="c22" class="custom-control-input">
                                    <label for="c22" class="custom-control-label">
                                        Z
                                    </label>
                                </div>
                        </div>
                        <button type="button" class="btn show-more-filters">
                            <span class="text">+ 18 More</span>
                            <span class="text opened">- 18 Less</span>
                            <span class="arrow-btn">
                                <img src="/images/icon-v-down-blue.svg" alt="" class="img-responsive">
                            </span>
                        </button>
                    </div>
                </div>
                            <div class="form-group clarity-group">
                    <div class="name-filter">Clarity </div>
                    <div class="row-filter">
                        <div class="filter-container">
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl0" class="custom-control-input">
                                    <label for="cl0" class="custom-control-label">
                                        FL
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl1" class="custom-control-input">
                                    <label for="cl1" class="custom-control-label">
                                        IF
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl2" class="custom-control-input">
                                    <label for="cl2" class="custom-control-label">
                                        VVS1
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl3" class="custom-control-input">
                                    <label for="cl3" class="custom-control-label">
                                        VVS2
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl4" class="custom-control-input">
                                    <label for="cl4" class="custom-control-label">
                                        VS1
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl5" class="custom-control-input">
                                    <label for="cl5" class="custom-control-label">
                                        VS2
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl6" class="custom-control-input">
                                    <label for="cl6" class="custom-control-label">
                                        VS3
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl7" class="custom-control-input">
                                    <label for="cl7" class="custom-control-label">
                                        SI1
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl8" class="custom-control-input">
                                    <label for="cl8" class="custom-control-label">
                                        SI2
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl9" class="custom-control-input">
                                    <label for="cl9" class="custom-control-label">
                                        SI3
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl10" class="custom-control-input">
                                    <label for="cl10" class="custom-control-label">
                                        I1
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl11" class="custom-control-input">
                                    <label for="cl11" class="custom-control-label">
                                        I2
                                    </label>
                                </div>
                                <div class="filter custom-checkbox">
                                    <input type="checkbox" id="cl12" class="custom-control-input">
                                    <label for="cl12" class="custom-control-label">
                                        I3
                                    </label>
                                </div>
                        </div>
                    </div>
                </div>



            <div class="collapse in" id="free-search" aria-expanded="true" style="">

                <div class="form-group multiply-group-filter">
                    <div class="name-filter">Finish</div>
                    <div class="row-filter">
                            <div class="col-group cut-group">
                                <label id="cut">Cut</label>
                                <select aria-labelledby="cut" name="cutFrom" class="form-control">
                                    <option value="0">From</option>
                                        <option value="1">Poor</option>
                                        <option value="2">Fair</option>
                                        <option value="3">Good</option>
                                        <option value="4">Very Good</option>
                                        <option value="5">Excellent</option>
                                        <option value="6">Ideal</option>
                                </select>
                                <span>-</span>
                                <select aria-labelledby="cut" name="cutTo" class="form-control">
                                    <option value="0">To</option>
                                        <option value="1">Poor</option>
                                        <option value="2">Fair</option>
                                        <option value="3">Good</option>
                                        <option value="4">Very Good</option>
                                        <option value="5">Excellent</option>
                                        <option value="6">Ideal</option>
                                </select>
                            </div>
                                                    <div class="col-group polish-group">
                                <label id="polish">Polish</label>
                                <select aria-labelledby="polish" name="polishFrom" class="form-control">
                                    <option value="0">From</option>
                                        <option value="1">Poor</option>
                                        <option value="2">Fair</option>
                                        <option value="3">Good</option>
                                        <option value="4">Very Good</option>
                                        <option value="5">Excellent</option>
                                        <option value="6">Ideal</option>
                                </select>
                                <span>-</span>
                                <select aria-labelledby="polish" name="polishTo" class="form-control">
                                    <option value="0">To</option>
                                        <option value="1">Poor</option>
                                        <option value="2">Fair</option>
                                        <option value="3">Good</option>
                                        <option value="4">Very Good</option>
                                        <option value="5">Excellent</option>
                                        <option value="6">Ideal</option>
                                </select>
                            </div>
                                                    <div class="col-group symmetry-group">
                                <label id="symmetry">Symmetry</label>
                                <select aria-labelledby="symmetry" name="symmetryFrom" class="form-control">
                                    <option value="0">From</option>
                                        <option value="1">Poor</option>
                                        <option value="2">Fair</option>
                                        <option value="3">Good</option>
                                        <option value="4">Very Good</option>
                                        <option value="5">Excellent</option>
                                        <option value="6">Ideal</option>
                                </select>
                                <span>-</span>
                                <select aria-labelledby="symmetry" name="symmetryTo" class="form-control">
                                    <option value="0">To</option>
                                        <option value="1">Poor</option>
                                        <option value="2">Fair</option>
                                        <option value="3">Good</option>
                                        <option value="4">Very Good</option>
                                        <option value="5">Excellent</option>
                                        <option value="6">Ideal</option>
                                </select>
                            </div>
                    </div>
                </div>
                    <div class="form-group flu-group">
                        <div class="name-filter">Fluorescence</div>
                        <div class="row-filter">
                            <div class="filter-container">
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="fl0" class="custom-control-input" value="None">
                                        <label for="fl0" class="custom-control-label">
                                            None
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="fl1" class="custom-control-input" value="Very Slight">
                                        <label for="fl1" class="custom-control-label">
                                            Very Slight
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="fl2" class="custom-control-input" value="Slight">
                                        <label for="fl2" class="custom-control-label">
                                            Slight
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="fl3" class="custom-control-input" value="Faint">
                                        <label for="fl3" class="custom-control-label">
                                            Faint
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="fl4" class="custom-control-input" value="Medium">
                                        <label for="fl4" class="custom-control-label">
                                            Medium
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="fl5" class="custom-control-input" value="Strong">
                                        <label for="fl5" class="custom-control-label">
                                            Strong
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="fl6" class="custom-control-input" value="Very Strong">
                                        <label for="fl6" class="custom-control-label">
                                            Very Strong
                                        </label>
                                    </div>
                            </div>
                            <button type="button" class="btn show-more-filters">
                                <span class="text">+ 2 More</span>
                                <span class="text opened">- 2 Less</span>
                                <span class="arrow-btn">
                                    <img src="/images/icon-v-down-blue.svg" alt="" class="img-responsive">
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="form-group lab-group">
                        <div class="name-filter">Lab</div>
                        <div class="row-filter">
                            <div class="filter-container">
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l0" class="custom-control-input">
                                        <label for="l0" class="custom-control-label">
                                            GIA
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l1" class="custom-control-input">
                                        <label for="l1" class="custom-control-label">
                                            RAP
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l2" class="custom-control-input">
                                        <label for="l2" class="custom-control-label">
                                            AGS
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l3" class="custom-control-input">
                                        <label for="l3" class="custom-control-label">
                                            HRD
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l4" class="custom-control-input">
                                        <label for="l4" class="custom-control-label">
                                            IGI
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l5" class="custom-control-input">
                                        <label for="l5" class="custom-control-label">
                                            RDC
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l6" class="custom-control-input">
                                        <label for="l6" class="custom-control-label">
                                            CGL
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l7" class="custom-control-input">
                                        <label for="l7" class="custom-control-label">
                                            DCLA
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l8" class="custom-control-input">
                                        <label for="l8" class="custom-control-label">
                                            GCAL
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l9" class="custom-control-input">
                                        <label for="l9" class="custom-control-label">
                                            GHI
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l10" class="custom-control-input">
                                        <label for="l10" class="custom-control-label">
                                            DBGIS
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l11" class="custom-control-input">
                                        <label for="l11" class="custom-control-label">
                                            GSI
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l12" class="custom-control-input">
                                        <label for="l12" class="custom-control-label">
                                            GWLAB
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l13" class="custom-control-input">
                                        <label for="l13" class="custom-control-label">
                                            NGTC
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l14" class="custom-control-input">
                                        <label for="l14" class="custom-control-label">
                                            PGS
                                        </label>
                                    </div>
                                    <div class="filter custom-checkbox">
                                        <input type="checkbox" id="l15" class="custom-control-input">
                                        <label for="l15" class="custom-control-label">
                                            NONE
                                        </label>
                                    </div>
                            </div>
                            <button type="button" class="btn show-more-filters">
                                <span class="text">+ 11 More</span>
                                <span class="text opened">- 11 Less</span>
                                <span class="arrow-btn">
                                    <img src="/images/icon-v-down-blue.svg" alt="" class="img-responsive">
                                </span>
                            </button>
                        </div>
                    </div>

            </div>

                <div class="show-more">
                    <a class="show-more-link show-more-open" data-toggle="collapse" href="#free-search" role="button" aria-expanded="true" aria-controls="free-search">
                        <span class="init">Show More </span>
                        <span class="open">Show Less </span>
                        <span class="arrow-btn">
                            <img src="/images/icon-v-down-blue.svg" alt="" class="img-responsive" ></img>
                        </span>
                    </a>
                </div>
            <img src="/images/free-search/diamonds-10.png?height=147" alt="" class="left">
            <img src="/images/free-search/diamonds-10.png?height=91" alt="" class="right">
            
            <div class="form-btns text-center">
                <button type="submit" class="btn btn-primary send-btn" disabled="" data-category="free search" data-label="Diamond search" data-hs-event-50099495="1"><img src="/images/free-search/ico-search.svg"> Search</button>
                <input type="reset" value="Reset" class="btn btn-link reset-btn">
            </div>
            <div class="loader">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

        </form>
    </div>
</div> */}



        </>
    );

};

export default Search;