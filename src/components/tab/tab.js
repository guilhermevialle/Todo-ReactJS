import "./tab.scss";

export default ({ left, middle, right, rightCb, leftCb }) => {
    return (
        <div className="tab">
            <span
                onClick={(e) => {
                    leftCb(e.currentTarget);
                }}
            >
                {left}
            </span>
            <span>{middle}</span>
            <span
                onClick={(e) => {
                    rightCb(e.currentTarget);
                }}
            >
                {right}
            </span>
        </div>
    );
};
