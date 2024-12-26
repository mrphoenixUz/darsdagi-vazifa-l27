import React, { useState } from 'react';
import { useAddBookMutation } from '../features/api';

const AddBookForm = () => {
  const [createBook] = useAddBookMutation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    authors: '',
  });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('authors', JSON.stringify([formData.authors]));

    try {
      const res = await createBook(data).unwrap();
      console.log(res)
      alert('Book added successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 mb-4 w-full"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        className="border p-2 mb-4 w-full"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Authors (comma-separated IDs)"
        className="border p-2 mb-4 w-full"
        value={formData.authors}
        onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
      />
      <input
        type="file"
        className="mb-4"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
