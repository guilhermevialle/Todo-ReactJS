import "./box.scss";

export default ({ iconProps, title, style }) => {
    return (
        <div className="box" style={style}>
            <div class="icon">
                <img
                    style={{ backgroundColor: iconProps.bgColor }}
                    src={iconProps.img}
                />
            </div>
            <div class="title">
                <span>{title}</span>
            </div>
            <div class="count">
                <span>5</span>
            </div>
        </div>
    );
};
