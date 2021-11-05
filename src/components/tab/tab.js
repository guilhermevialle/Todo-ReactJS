import "./tab.scss";

export default ({ left, middle, right }) => {
    return (
        <div className="tab">
            <span>{left}</span>
            <span>{middle}</span>
            <span>{right}</span>
        </div>
    );
};
