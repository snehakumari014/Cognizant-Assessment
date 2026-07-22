function BookDetails() {

    const books = [
        { id: 1, name: "React Basics", author: "Jordan Walke", price: 550 },
        { id: 2, name: "Java Programming", author: "James Gosling", price: 650 }
    ];

    return (
        <div>
            <h2>Book Details</h2>

            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <b>{book.name}</b> - {book.author} - ₹{book.price}
                    </li>
                ))}
            </ul>

            <hr />
        </div>
    );
}

export default BookDetails;