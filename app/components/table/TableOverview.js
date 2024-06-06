import React from "react"
import Styles from './table.module.scss';




export const TableOverlay = (props) => {
    const { title, buttonName, onOverlayClick } = props;
    return (
        <React.Fragment>
            <div className={Styles.infy_table_overlay} role="presentation">
                <div className={Styles.infy_table_overlay_panel} role="presentation">
                    <div className={Styles.infy_table_overlay_wrapper}  role="presentation">
                        <p className="text-[#727578] text-sm mb-2">{title}</p>
                        <button  style={{width: 300}} onClick={() => onOverlayClick()}>
                            {buttonName}
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
