import './AnItem.css';

function AnItem() {
    let date = new date();
    let title = "Foods";
    let price = 200;
    return (
        <div className="an-item">
            <div className="date">
                <div>Date:</div>
                <div>{date.getDate()}</div>
            </div>
            <div className>
                <div>Title:</div>
                <div>{title}</div>
            </div>
            <div>
                <div>Expense:</div>
                <div>${price}</div>
            </div>
        </div>
    );
}

export default AnItem;