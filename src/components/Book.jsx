import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="relative overflow-hidden shadow-lg rounded hover:shadow-2xl transition duration-200 transform hover:-translate-y-2">
        <img
          src={book.image}
          alt="book cover"
          className="object-cover w-full h-56 md:h-64 xl:h-80"
        />

        <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 px-6 py-4 absolute inset-0 transition-opacity duration-200 flex flex-col">
          <h4 className="mb-4 text-lg font-bold text-gray-100">{book.title}</h4>
          <br />
          <p className="text-sm tracking-wide">
            {book.subtitle.substring(0, 45)}...
          </p>
          <br />
          <p className="mt-auto font-semibold text-sm tracking-wide">
            Price: {book.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
