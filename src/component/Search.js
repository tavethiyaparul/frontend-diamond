import React, { useState } from "react"
import Select, { components, OptionProps } from "react-select"
import roundshape from "../images/round1.png"
import pearshape from "../images/pear.png"
import ovelshape from "../images/ovel.png"
import marquiseshape from "../images/marquise.png"
import heartshape from "../images/heart.png"
import princessshape from "../images/princess.png"
import emeraldshape from "../images/Emerald.png"
import radiantshape from "../images/radiant.png"
import asschershape from "../images/Asscher.png"
import baguetteshape from "../images/Baguette.jpeg"
import cushionshape from "../images/Cushion.png"
import triangleshape from "../images/Triangle.jpeg"


import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { Col, Container, Row } from "react-bootstrap"
const Search = () => {
    const [shape, setShape] = useState()

    

    const shapeOption = [
        { value: "ROUND", label: "Round", image: roundshape },
        { value: "PEAR", label: "Pear", image: pearshape },
        { value: "OVEL", label: "Ovel", image: ovelshape },
        { value: "MARAUISE", label: "Marquise", image: marquiseshape },
        { value: "HEART", label: "Heart", image: heartshape },
        { value: "RADIANT", label: "Radiant", image: radiantshape },
        { value: "PRINCESS", label: "Princess", image: princessshape },
        { value: "EMERALD", label: "Emerald", image: emeraldshape },
        { value: "ASSCHER", label: "Asscher", image: asschershape },
        { value: "BAGUETTE", label: "Baguette", image: baguetteshape },
        { value: "EMERALD", label: "Emerald", image: emeraldshape },
        { value: "TRIANGLE", label: "Triangle", image: triangleshape },
        { value: "CUSHION", label: "Cushion", image: cushionshape },
        { value: "MARAUISE", label: "Marquise", image: marquiseshape },
        
    ]

    const fromSizeOption = [
        { value: "0.30", label: "0.30" },
        { value: "0.40", label: "0.40" },
        { value: "0.50", label: "0.50" },
        { value: "0.60", label: "0.60" },
        { value: "0.70", label: "0.70" },
        { value: "0.80", label: "0.80" },
        { value: "0.90", label: "0.90" },
        { value: "1.00", label: "1.00" },
        { value: "1.50", label: "1.50" },
        { value: "3.00", label: "3.00" },
        { value: "4.00", label: "4.00" },
        { value: "5.00", label: "5.00" },
        { value: "6.00", label: "6.00" },
        { value: "10.00", label: "10.00" },
    ]

    const toSizeOption = [
        { value: "0.39", label: "0.39" },
        { value: "0.49", label: "0.49" },
        { value: "0.59", label: "0.59" },
        { value: "0.69", label: "0.69" },
        { value: "0.79", label: "0.79" },
        { value: "0.89", label: "0.89" },
        { value: "0.99", label: "0.99" },
        { value: "1.49", label: "1.49" },
        { value: "1.99", label: "1.99" },
        { value: "3.99", label: "3.99" },
        { value: "4.99", label: "4.99" },
        { value: "5.99", label: "5.99" },
        { value: "9.99", label: "9.99" },
        { value: "10.99", label: "10.99" },
    ]

    const colorOption = [
        { value: "D", label: "D" },
        { value: "E", label: "E" },
        { value: "F", label: "F" },
        { value: "G", label: "G" },
        { value: "H", label: "H" },
        { value: "I", label: "I" },
        { value: "J", label: "J" },
        { value: "K", label: "K" },
        { value: "L", label: "L" },
        { value: "M", label: "M" },
        { value: "N", label: "N" },
        { value: "O", label: "O" },
        { value: "P", label: "P" },
        { value: "Q", label: "Q" },
        { value: "R", label: "R" },
        { value: "S", label: "S" },
        { value: "T", label: "T" },
        { value: "U", label: "U" },
        { value: "V", label: "V" },
        { value: "W", label: "W" },
        { value: "X", label: "X" },
        { value: "Y", label: "Y" },
        { value: "Z", label: "Z" },
    ]

    const clarityOption = [
        { value: "FL", label: "FL" },
        { value: "IF", label: "IF" },
        { value: "VVS1", label: "VVS1" },
        { value: "VVS2", label: "VVS2" },
        { value: "VS1", label: "VS1" },
        { value: "VS2", label: "VS2" },
        { value: "SI1", label: "SI1" },
        { value: "SI2", label: "SI2" },
        { value: "SI3", label: "SI3" },
        { value: "I1", label: "I1" },
        { value: "I2", label: "I2" },
        { value: "I3", label: "I3" },
    ]

    const fluoOption = [
        { value: "NONE", label: "None" },
        { value: "VSL", label: "Very Slight" },
        { value: "FAINT", label: "Faint" },
        { value: "SL", label: "Slight" },
        { value: "MED", label: "Medium" },
        { value: "STG", label: "Storang" },
        { value: "VST", label: "Very Storang" },
    ]

    const fluocColorOption = [
        { value: "BLUE", label: "Blue" },
        { value: "YELLOW", label: "Yellow" },
        { value: "VG", label: "Very Good" },
    ]
    const gardingOption = [
        { value: "GIA", label: "GIA" },
        { value: "IGI", label: "IGI" },
        { value: "HRD", label: "HRD" },
        { value: "NONCERT", label: "NONCERT" },
    ]

    const eyeCleanOption = [
        { value: "GIA", label: "Yes" },
        { value: "IGI", label: "Borderline" },
        { value: "HRD", label: "El" },
        { value: "NONCERT", label: "E2(No)" },
    ]

    const finishOption = [
        { value: "3X", label: "3X" },
        { value: "EX-", label: "EX-" },
        { value: "VG+", label: "VG+" },
        { value: "VG-", label: "VG-" },
    ]

    const cutOption = [
        { value: "EX", label: "Excellent" },
        { value: "GD", label: "Good" },
        { value: "VG", label: "Very Good" },
    ]

    const polishOption = [
        { value: "EX", label: "Excellent" },
        { value: "GD", label: "Good" },
        { value: "VG", label: "Very Good" },
    ]

    const symOption = [
        { value: "EX", label: "Excellent" },
        { value: "GD", label: "Good" },
        { value: "VG", label: "Very Good" },
    ]

    const flueColorOption = [
        { value: "BLUE", label: "Blue" },
        { value: "YELLOW", label: "Yellow" }
    ]

    const locationOption = [
        { value: "INDIA", label: "India" },
        { value: "HONG KONG", label: "Hong Kong" }
    ]


    const Option = (props) => (
        <components.Option {...props}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" checked={props.isSelected} onChange={() => null} style={{ marginRight: "10px" }} />
                <img src={props.data.image} alt={props.label} style={{ marginRight: "10px", width: "30px", height: "30px" }} />
                {props.label}
            </div>
        </components.Option>
    )

    const InputOption = ({ getStyles, Icon, isDisabled, isFocused, isSelected, children, innerProps, ...rest }) => {
        const [isActive, setIsActive] = useState(false)

        const onMouseDown = () => setIsActive(true)
        const onMouseUp = () => setIsActive(false)
        const onMouseLeave = () => setIsActive(false)

        // styles
        let bg = "transparent"
        if (isFocused) bg = "#eee"
        if (isActive) bg = "#B2D4FF"

        const style = {
            alignItems: "center",
            backgroundColor: bg,
            color: "inherit",
            display: "flex ",
        }

        // prop assignment
        const props = {
            ...innerProps,
            onMouseDown,
            onMouseUp,
            onMouseLeave,
            style,
        }

        return (
            <components.Option {...rest} isDisabled={isDisabled} isFocused={isFocused} isSelected={isSelected} getStyles={getStyles} innerProps={props}>
                <input type="checkbox" checked={isSelected} className="me-4" />
                {children}
            </components.Option>
        )
    }

    return (
        <div className="p-5">
            <div className="align-item-center">
                <h2>Fast Diamond Search</h2>
            </div>
            {/* <h3>
                Search Over <span>1,000,000</span> Diamonds from Thousands of Verified Suppliers Worldwide!
            </h3> */}
            {/* 1 */}
            <div class="grid-wrapper text-center panel panel-blue">
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Shape</span>
                        <div className="w-100" >
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={shapeOption}
                                components={{
                                    Option,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Size</span>
                        <div >
                            <Select
                                defaultValue={[]}
                                options={fromSizeOption}
                                width={200}
                            />
                        </div>
                        -
                        <div>
                            <Select
                                defaultValue={[]}
                                options={toSizeOption}

                            />
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">GradingReport</span>
                        <div className="w-100" >
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={gardingOption}
                                components={{
                                    Option: InputOption,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div class="grid-wrapper text-center panel panel-blue ">
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">ColorWhite</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={colorOption}
                                components={{
                                    Option: InputOption,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="g-item">
                    <div className="d-flex align-items-center">
                        <span className="fs-5 pe-3">ClarityColor</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={clarityOption}
                                components={{
                                    Option: InputOption,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center">
                        <span className="fs-5  pe-3">EyeClean</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={eyeCleanOption}

                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div class="grid-wrapper text-center panel panel-blue">
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Cut</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={cutOption}
                                components={{
                                    Option: InputOption,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Polish</span>
                        <div >
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={polishOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">symmetry</span>
                        <div >
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={symOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 */}
            <div class="grid-wrapper text-center panel panel-blue">
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Fluorescence</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={fluoOption}
                                components={{
                                    Option: InputOption,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Fl. Color</span>
                        <div >
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={flueColorOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Location</span>
                        <div >
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={locationOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Search
