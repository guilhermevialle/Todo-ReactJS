import "./todotemplate.scss";

export default ({ data }) => {
    return (
        <div className="todotemplate">
            <div class="check">
                <input type="checkbox" class="plus-minus"></input>
            </div>
            <div class="todo-title">
                <span>{data.title}</span>
            </div>
            <div class="todo-desc">
                <span>{data.desc}</span>
            </div>
        </div>
    );
};
