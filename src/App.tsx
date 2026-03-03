// import { useEffect, useState } from "react";
// import supabase from "./supabase/client";
// import type { Database } from "./supabase/database.types";
// import { Home } from "./pages/Home";
import { useState } from "react";
import "./App.css";
import supabase from "./supabase/client";
// import { Button } from "./components/ui/Button";
// import { Search } from "lucide-react";

function App() {
  // type newBook = {};
  type Book = {
    id: number;
    title: string;
    description: string;
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) return;

    const { data, error } = await supabase
      .from("todos")
      .insert([
        {
          title: title,
          description: description,
        },
      ])
      .select();

    const newBook: Book = {
      id: Date.now(),
      title,
      description,
    };
    if (error) {
      console.log(error);
      return;
    }

    setBooks((prev) => [...prev, newBook]);

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800"> </h1>
        <div className="max-w-2xl w-full mb-4">
          <input
            className="search-bar bg-white w-full border border-gray-300 rounded-[50px] px-8 py-2 focus:outline-none h-16 placeholder:text-lg"
            type="text"
            placeholder="Search a Book"
          />
        </div>
        <div className="book-list bg-white rounded-xl p-10 w-[670px] h-96 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {books.map((book) => (
            <div
              className="book bg-green-100 p-3 mb-4 border-b border-green-500 flex justify-between gap-2 rounded-lg"
              key={book.id}
            >
              <div>
                <h2 className="title font-semibold text-xl color-black">
                  {book.title}
                </h2>
                <p className="detail color-black mt-2 w-[450px]">
                  {book.description}
                </p>
              </div>
              <div className="book-btns w-[100px] mt-8">
                <a
                  className="save px-4 py-2 rounded-md bg-blue-400 text-white block mb-4 text-center !text-white"
                  href="#"
                >
                  Save
                </a>
                <a
                  className="delete px-4 py-2 rounded-md bg-red-600 text-white block mb-4 text-center !text-white"
                  href="#"
                >
                  Delete
                </a>
                <a
                  className="edit px-4 py-2 rounded-md bg-yellow-400 text-white block  text-center !text-white"
                  href="#"
                >
                  edit
                </a>
              </div>
            </div>
          ))}
        </div>
        <form
          className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full mt-6 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-gray-800">Add New Book</h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Book Title
            </label>
            <input
              className="book-title w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none "
              type="text"
              placeholder="Enter Book Title"
              required
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              className="book-description w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none"
              placeholder="Enter book description..."
              required
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="add-book bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition font-medium"
          >
            Add Book
          </button>
        </form>
      </div>
      {/* <Home /> */}

      {/* <button
        className="text-white m-10 bg-blue-400 hover:bg-blue-500 rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-bold cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Count : &nbsp;{count}
      </button> */}
    </>
  );
}
export default App;
