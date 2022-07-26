import './AnItem.css';

function AnItem() {
    let date = new Date();
    let title = "Foods";
    let price = 200;
    return (
        <div className="an-item">
            <div className="ind-item">
                Date: {date.getFullYear()}-{date.getMonth()+1}-{date.getDate()}
            </div>
            <div className="ind-item">
                Title: {title}
            </div>
            <div className="ind-item">
                Expense: ${price}
            </div>
        </div>
    );
}

export default AnItem;